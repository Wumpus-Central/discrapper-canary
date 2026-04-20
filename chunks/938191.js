s.d(t, { gB: () => b, jP: () => u, yB: () => p });
var r = s(64700),
    l = s(311907),
    n = s(775602),
    a = s(652525),
    o = s(749022),
    i = s(787445);
let c = "custom-cursors-styles",
    u = "custom-cursors",
    d = `
  :root {
    --custom-cursor: url(${o.A}) 8 4, auto;
    --custom-cursor-pointer: url(${i.A}) 4 4, pointer;
  }

  .${u},
  .${u} [class*='BalanceWidgetMenu'] {
    cursor: var(--custom-cursor) !important;
  }

  /* Interactive elements get pointer cursor */
  .${u} button,
  .${u} [role='button'],
  .${u} a,
  .${u} input[type='button'],
  .${u} input[type='submit'],
  .${u} input[type='reset'],
  .${u} [role='menuitem'],
  .${u} [role='option'],
  .${u} [role='listitem'],
  .${u} [role='radio'],
  .${u} [role='checkbox'],
  .${u} input[type='checkbox'],
  .${u} input[type='radio'],
  .${u} .menu-item,
  .${u} .dropdown-item,
  .${u} .select-option,
  .${u} .list-item,
  .${u} [style*='cursor: pointer'],
  .${u} [class*='cursor-pointer'],
  .${u} [class*='shopCard'],
  .${u} [class*='Card'],
  .${u} [class*='FeaturedCollection'],
  .${u} [class*='FeaturedChip'],
  .${u} [class*='FeaturedProduct'],
  .${u} [class*='productCardContainer'],
  .${u} [class*='collectiblesShopHeaderBar'],
  .${u} [class*='wrapper'],
  .${u} [class*='menu'],
  .${u} [class*='menuItem'],
  .${u} [class*='select'],
  .${u} [class*='option'],
  .${u} [class*='popout'],
  .${u} [class*='searchInput'],
  .${u} [class*='searchInputContainer'],
  .${u} [class*='searchInputContainerInput'],
  .${u} [class*='searchInputContainerIcon'],
  .${u} [class*='checkboxWrapper'],
  .${u} [class*='checkbox'],
  .${u} [class*='input'],
  .${u} [class*='label'],
  .${u} [class*='labelClickable'] {
    cursor: var(--custom-cursor-pointer) !important;
  }
`;
function b() {
    let e = p("useCustomCursorsCSS");
    r.useLayoutEffect(() => {
        if (!e) return;
        let t = document.getElementById(c);
        return (
            null == t && (((t = document.createElement("style")).id = c), document.head.appendChild(t)),
            (t.textContent = d),
            () => {
                t.textContent = "";
            }
        );
    }, [e]);
}
function p(e) {
    let t = (0, a.t)(e),
        s = (0, l.bG)([n.A], () => n.A.enableCustomCursor ?? !0);
    return t && s;
}
