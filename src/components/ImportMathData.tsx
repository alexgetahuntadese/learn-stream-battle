import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const ImportMathData = () => {
  const [isImporting, setIsImporting] = useState(false);

  const handleImport = async () => {
    setIsImporting(true);
    try {
      const { data, error } = await supabase.functions.invoke('import-math-data');
      
      if (error) {
        throw error;
      }

      if (data.success) {
        toast.success(`Successfully imported ${data.totalImported} mathematics questions!`);
      } else {
        throw new Error(data.error || 'Import failed');
      }
    } catch (error) {
      console.error('Import error:', error);
      toast.error(`Import failed: ${error.message}`);
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Import Mathematics Questions</CardTitle>
        <CardDescription>
          Import all Grade 12 Mathematics questions into the database
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleImport} 
          disabled={isImporting}
          className="w-full"
        >
          {isImporting ? "Importing..." : "Import Math Questions"}
        </Button>
      </CardContent>
    </Card>
  );
};