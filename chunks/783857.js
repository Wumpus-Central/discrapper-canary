n.d(t, { jP: () => i, gB: () => c, yB: () => d });
var r = n(582128),
    l = n(17928),
    s = n(775602),
    a = n(652525);
let o = "custom-cursors-styles",
    i = "custom-cursors",
    u = `
  :root {
    --custom-cursor: url(https://cdn.discordapp.com/assets/content/a5a35112cf47613450476b245c5ded25838b11a09c30494ad05dd153120f0e33.svg) 0 0, auto;
    --custom-cursor-pointer: url(https://cdn.discordapp.com/assets/content/99d372f82ccdb87439920e8033c22642f7cd74ecb8520c0554003b4fb4c88e49.svg) 0 0, pointer;
  }

  .${i},
  .${i} [class*='BalanceWidgetMenu'] {
    cursor: var(--custom-cursor) !important;
  }

  /* Interactive elements get pointer cursor */
  .${i} button,
  .${i} [role='button'],
  .${i} a,
  .${i} input[type='button'],
  .${i} input[type='submit'],
  .${i} input[type='reset'],
  .${i} [role='menuitem'],
  .${i} [role='option'],
  .${i} [role='listitem'],
  .${i} [role='tab'],
  .${i} [role='radio'],
  .${i} [role='checkbox'],
  .${i} input[type='checkbox'],
  .${i} input[type='radio'],
  .${i} .menu-item,
  .${i} .dropdown-item,
  .${i} .select-option,
  .${i} .list-item,
  .${i} [style*='cursor: pointer'],
  .${i} [class*='cursor-pointer'],
  .${i} [class*='shopCard'],
  .${i} [class*='Card'],
  .${i} [class*='FeaturedCollection'],
  .${i} [class*='FeaturedChip'],
  .${i} [class*='FeaturedProduct'],
  .${i} [class*='productCardContainer'],
  .${i} [class*='wrapper'],
  .${i} [class*='menu'],
  .${i} [class*='menuItem'],
  .${i} [class*='select'],
  .${i} [class*='option'],
  .${i} [class*='popout'],
  .${i} [class*='searchInput'],
  .${i} [class*='searchInputContainer'],
  .${i} [class*='searchInputContainerInput'],
  .${i} [class*='searchInputContainerIcon'],
  .${i} [class*='checkboxWrapper'],
  .${i} [class*='checkbox'],
  .${i} [class*='input'],
  .${i} [class*='label'],
  .${i} [class*='labelClickable'] {
    cursor: var(--custom-cursor-pointer) !important;
  }
`;
function c() {
    let e = d("useCustomCursorsCSS");
    r.useLayoutEffect(() => {
        if (!e) return;
        let t = document.getElementById(o);
        return (
            null == t && (((t = document.createElement("style")).id = o), document.head.appendChild(t)),
            (t.textContent = u),
            () => {
                t.textContent = "";
            }
        );
    }, [e]);
}
function d(e) {
    let t = (0, a.t)(e),
        n = (0, l.bG)([s.Ay], () => s.Ay.enableCustomCursor ?? !0);
    return t && n;
}
