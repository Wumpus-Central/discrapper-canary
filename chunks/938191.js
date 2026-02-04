n.d(t, {
    gB: () => g,
    jP: () => u,
    yB: () => p,
});
var r = n(64700),
    l = n(311907),
    s = n(775602),
    a = n(652525),
    i = n(749022),
    o = n(787445);
let c = "custom-cursors-styles",
    u = "custom-cursors",
    d = "\n  :root {\n    --custom-cursor: url("
        .concat(i.A, ") 8 4, auto;\n    --custom-cursor-pointer: url(")
        .concat(o.A, ") 4 4, pointer;\n  }\n\n  .")
        .concat(u, ",\n  .")
        .concat(
            u,
            " [class*='BalanceWidgetMenu'] {\n    cursor: var(--custom-cursor) !important;\n  }\n\n  /* Interactive elements get pointer cursor */\n  .",
        )
        .concat(u, " button,\n  .")
        .concat(u, " [role='button'],\n  .")
        .concat(u, " a,\n  .")
        .concat(u, " input[type='button'],\n  .")
        .concat(u, " input[type='submit'],\n  .")
        .concat(u, " input[type='reset'],\n  .")
        .concat(u, " [role='menuitem'],\n  .")
        .concat(u, " [role='option'],\n  .")
        .concat(u, " [role='listitem'],\n  .")
        .concat(u, " [role='radio'],\n  .")
        .concat(u, " [role='checkbox'],\n  .")
        .concat(u, " input[type='checkbox'],\n  .")
        .concat(u, " input[type='radio'],\n  .")
        .concat(u, " .menu-item,\n  .")
        .concat(u, " .dropdown-item,\n  .")
        .concat(u, " .select-option,\n  .")
        .concat(u, " .list-item,\n  .")
        .concat(u, " [style*='cursor: pointer'],\n  .")
        .concat(u, " [class*='cursor-pointer'],\n  .")
        .concat(u, " [class*='shopCard'],\n  .")
        .concat(u, " [class*='productCardContainer'],\n  .")
        .concat(u, " [class*='collectiblesShopHeaderBar'],\n  .")
        .concat(u, " [class*='wrapper'],\n  .")
        .concat(u, " [class*='menu'],\n  .")
        .concat(u, " [class*='menuItem'],\n  .")
        .concat(u, " [class*='select'],\n  .")
        .concat(u, " [class*='option'],\n  .")
        .concat(u, " [class*='popout'],\n  .")
        .concat(u, " [class*='searchInput'],\n  .")
        .concat(u, " [class*='searchInputContainer'],\n  .")
        .concat(u, " [class*='searchInputContainerInput'],\n  .")
        .concat(u, " [class*='searchInputContainerIcon'],\n  .")
        .concat(u, " [class*='checkboxWrapper'],\n  .")
        .concat(u, " [class*='checkbox'],\n  .")
        .concat(u, " [class*='input'],\n  .")
        .concat(u, " [class*='label'],\n  .")
        .concat(u, " [class*='labelClickable'] {\n    cursor: var(--custom-cursor-pointer) !important;\n  }\n");

function g() {
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
        n = (0, l.bG)([s.A], () => {
            var e;
            return null == (e = s.A.enableCustomCursor) || e;
        });
    return t && n;
}
