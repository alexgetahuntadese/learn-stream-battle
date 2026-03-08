

## Plan: Enhance Homepage UI

The current homepage is functional but plain compared to the polished GradesPage which has floating stars, shooting stars, glowing orbs, and refined glassmorphism cards. This plan brings the homepage to the same premium level.

### Changes to `src/pages/Index.tsx`

**1. Add floating stars + shooting stars background**
Reuse the same `generateStars` and `generateShootingStars` pattern from GradesPage, plus the decorative blurred gradient orbs.

**2. Upgrade hero section**
- Add a pill badge above the title (e.g. "Ethiopian Curriculum" with a GraduationCap icon) matching GradesPage style
- Make the title larger on desktop with tighter tracking
- Add a subtle gradient text effect on the title (white to purple-200)

**3. Redesign the feature cards**
Replace the current simple glassmorphism cards with the refined GradesPage card pattern:
- Ultra-subtle `bg-white/[0.04]` base with `backdrop-blur-xl`
- Glow effect behind each card on hover (colored blur that fades in)
- Smoother border transitions (`border-white/[0.08]` to `border-white/[0.15]`)
- Scale-up on hover with `group-hover:scale-[1.02]`
- Larger icons in gradient-filled rounded squares (like the grade number badges)
- Bottom action hint with arrow animation

**4. Upgrade stats section**
- Wrap stats in a glassmorphism container with border
- Add icon for each stat
- Animated counting effect via CSS or simple presentation improvement
- Slightly larger numbers with gradient coloring

**5. Add LanguageSwitcher**
Position the existing `LanguageSwitcher` component in the top-right corner for easy access from the homepage.

### Files Modified
- `src/pages/Index.tsx` — full redesign with all enhancements above

### No new dependencies needed

