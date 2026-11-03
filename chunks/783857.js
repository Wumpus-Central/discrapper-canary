n.d(t, { jP: () => o, gB: () => u, yB: () => d });
var l = n(582128),
    r = n(17928),
    s = n(775602),
    a = n(652525);
let i = "custom-cursors-styles",
    o = "custom-cursors",
    c = `
  :root {
    --custom-cursor: url(https://cdn.discordapp.com/assets/content/a5a35112cf47613450476b245c5ded25838b11a09c30494ad05dd153120f0e33.svg) 0 0, auto;
    --custom-cursor-pointer: url(https://cdn.discordapp.com/assets/content/99d372f82ccdb87439920e8033c22642f7cd74ecb8520c0554003b4fb4c88e49.svg) 0 0, pointer;
  }

  .${o},
  .${o} [class*='BalanceWidgetMenu'] {
    cursor: var(--custom-cursor) !important;
  }

  /* Interactive elements get pointer cursor */
  .${o} button,
  .${o} [role='button'],
  .${o} a,
  .${o} input[type='button'],
  .${o} input[type='submit'],
  .${o} input[type='reset'],
  .${o} [role='menuitem'],
  .${o} [role='option'],
  .${o} [role='listitem'],
  .${o} [role='tab'],
  .${o} [role='radio'],
  .${o} [role='checkbox'],
  .${o} input[type='checkbox'],
  .${o} input[type='radio'],
  .${o} .menu-item,
  .${o} .dropdown-item,
  .${o} .select-option,
  .${o} .list-item,
  .${o} [style*='cursor: pointer'],
  .${o} [class*='cursor-pointer'],
  .${o} [class*='shopCard'],
  .${o} [class*='Card'],
  .${o} [class*='FeaturedCollection'],
  .${o} [class*='FeaturedChip'],
  .${o} [class*='FeaturedProduct'],
  .${o} [class*='productCardContainer'],
  .${o} [class*='wrapper'],
  .${o} [class*='menu'],
  .${o} [class*='menuItem'],
  .${o} [class*='select'],
  .${o} [class*='option'],
  .${o} [class*='popout'],
  .${o} [class*='searchInput'],
  .${o} [class*='searchInputContainer'],
  .${o} [class*='searchInputContainerInput'],
  .${o} [class*='searchInputContainerIcon'],
  .${o} [class*='checkboxWrapper'],
  .${o} [class*='checkbox'],
  .${o} [class*='input'],
  .${o} [class*='label'],
  .${o} [class*='labelClickable'] {
    cursor: var(--custom-cursor-pointer) !important;
  }
`;
function u(e) {
    l.useLayoutEffect(() => {
        if (!e) return;
        let t = document.getElementById(i);
        return (
            null == t && (((t = document.createElement("style")).id = i), document.head.appendChild(t)),
            (t.textContent = c),
            () => {
                t.textContent = "";
            }
        );
    }, [e]);
}
function d(e) {
    let t = (0, a.t)(e),
        n = (0, r.bG)([s.Ay], () => s.Ay.enableCustomCursor ?? !0);
    return t && n;
}
