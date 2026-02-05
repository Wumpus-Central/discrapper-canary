"use strict";
s.d(t, { gB: () => g, jP: () => d, yB: () => m });
var n = s(64700),
    r = s(311907),
    l = s(775602),
    a = s(652525),
    i = s(749022),
    o = s(787445);
let c = "custom-cursors-styles",
    d = "custom-cursors",
    u = `
  :root {
    --custom-cursor: url(${i.A}) 8 4, auto;
    --custom-cursor-pointer: url(${o.A}) 4 4, pointer;
  }

  .${d},
  .${d} [class*='BalanceWidgetMenu'] {
    cursor: var(--custom-cursor) !important;
  }

  /* Interactive elements get pointer cursor */
  .${d} button,
  .${d} [role='button'],
  .${d} a,
  .${d} input[type='button'],
  .${d} input[type='submit'],
  .${d} input[type='reset'],
  .${d} [role='menuitem'],
  .${d} [role='option'],
  .${d} [role='listitem'],
  .${d} [role='radio'],
  .${d} [role='checkbox'],
  .${d} input[type='checkbox'],
  .${d} input[type='radio'],
  .${d} .menu-item,
  .${d} .dropdown-item,
  .${d} .select-option,
  .${d} .list-item,
  .${d} [style*='cursor: pointer'],
  .${d} [class*='cursor-pointer'],
  .${d} [class*='shopCard'],
  .${d} [class*='productCardContainer'],
  .${d} [class*='collectiblesShopHeaderBar'],
  .${d} [class*='wrapper'],
  .${d} [class*='menu'],
  .${d} [class*='menuItem'],
  .${d} [class*='select'],
  .${d} [class*='option'],
  .${d} [class*='popout'],
  .${d} [class*='searchInput'],
  .${d} [class*='searchInputContainer'],
  .${d} [class*='searchInputContainerInput'],
  .${d} [class*='searchInputContainerIcon'],
  .${d} [class*='checkboxWrapper'],
  .${d} [class*='checkbox'],
  .${d} [class*='input'],
  .${d} [class*='label'],
  .${d} [class*='labelClickable'] {
    cursor: var(--custom-cursor-pointer) !important;
  }
`;
function g() {
    let e = m("useCustomCursorsCSS");
    n.useLayoutEffect(() => {
        if (!e) return;
        let t = document.getElementById(c);
        return (
            null == t && (((t = document.createElement("style")).id = c), document.head.appendChild(t)),
            (t.textContent = u),
            () => {
                t.textContent = "";
            }
        );
    }, [e]);
}
function m(e) {
    let t = (0, a.t)(e),
        s = (0, r.bG)([l.A], () => l.A.enableCustomCursor ?? !0);
    return t && s;
}
