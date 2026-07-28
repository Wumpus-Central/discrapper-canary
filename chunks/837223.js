"use strict";
n.d(t, { vw: () => es, LY: () => ea, CR: () => er });
var r = n(538790),
    i = n(34446),
    a = n(760029),
    o = n(772856),
    s = n(192734),
    l = n(510140),
    u = n(871443),
    c = n(683202),
    d = n(271963),
    f = n(201092),
    p = n(582128);
let h = (0, p.createContext)(null);
(0, l.KU)(u.OJ, function (e, t, n) {
    let r = (0, p.useContext)(h),
        { isLoading: i, onLoadMore: o, scrollOffset: l, ...u } = e,
        m = (0, p.useRef)(null),
        g = (0, p.useMemo)(
            () => ({ onLoadMore: o, collection: null == r ? void 0 : r.collection, sentinelRef: m, scrollOffset: l }),
            [o, l, null == r ? void 0 : r.collection],
        );
    (0, c.n)(g, m);
    let v = (0, a.Sl)({
        ...u,
        id: void 0,
        children: n.rendered,
        defaultClassName: "react-aria-ListBoxLoadingIndicator",
        values: null,
    });
    return p.createElement(
        p.Fragment,
        null,
        p.createElement(
            "div",
            { style: { position: "relative", width: 0, height: 0 }, inert: (0, d.Y)(!0) },
            p.createElement("div", {
                "data-testid": "loadMoreSentinel",
                ref: m,
                style: { position: "absolute", height: 1, width: 1 },
            }),
        ),
        i &&
            v.children &&
            p.createElement(
                "div",
                { ...(0, s.v)((0, f.$)(e, { global: !0 }), { tabIndex: -1 }), ...v, role: "option", ref: t },
                v.children,
            ),
    );
});
var m = n(349797),
    g = n(159587),
    v = n(287946),
    y = n(208223);
let b = new WeakMap();
function _(e, t) {
    var n, r;
    let { id: i } = null != (n = b.get(e)) ? n : {};
    if (!i) throw Error("Unknown list");
    return `${i}-${"string" == typeof (r = t) ? r.replace(/\s*/g, "") : "" + r}`;
}
var w = n(709157),
    x = n(743109),
    E = n(596698),
    S = n(51621),
    k = n(377131),
    T = n(208630),
    C = n(428208),
    P = n(553444),
    A = n(492273),
    M = n(59344);
let R = new WeakMap();
var I = n(1730),
    L = {};
L = {
    "ar-AE": {
        removeButtonLabel: "\u0625\u0632\u0627\u0644\u0629",
        removeDescription:
            "\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0645\u0641\u062A\u0627\u062D DELETE \u0644\u0625\u0632\u0627\u0644\u0629 \u0639\u0644\u0627\u0645\u0629.",
    },
    "bg-BG": {
        removeButtonLabel: "\u041F\u0440\u0435\u043C\u0430\u0445\u0432\u0430\u043D\u0435",
        removeDescription:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 Delete, \u0437\u0430 \u0434\u0430 \u043F\u0440\u0435\u043C\u0430\u0445\u043D\u0435\u0442\u0435 \u043C\u0430\u0440\u043A\u0435\u0440\u0430.",
    },
    "cs-CZ": {
        removeButtonLabel: "Odebrat",
        removeDescription: "Stisknut\xedm kl\xe1vesy Delete odeberete zna\u010Dku.",
    },
    "da-DK": { removeButtonLabel: "Fjern", removeDescription: "Tryk p\xe5 Slet for at fjerne tag." },
    "de-DE": {
        removeButtonLabel: "Entfernen",
        removeDescription: "Auf \u201EL\xf6schen\u201C dr\xfccken, um das Tag zu entfernen.",
    },
    "el-GR": {
        removeButtonLabel: "\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7",
        removeDescription:
            "\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C4\u03B9\u03BA\u03AD\u03C4\u03B1.",
    },
    "en-US": { removeDescription: "Press Delete to remove tag.", removeButtonLabel: "Remove" },
    "es-ES": { removeButtonLabel: "Quitar", removeDescription: "Pulse Eliminar para quitar la etiqueta." },
    "et-EE": { removeButtonLabel: "Eemalda", removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete." },
    "fi-FI": { removeButtonLabel: "Poista", removeDescription: "Poista tunniste painamalla Poista-painiketta." },
    "fr-FR": {
        removeButtonLabel: "Supprimer",
        removeDescription: "Appuyez sur Supprimer pour supprimer l\u2019\xe9tiquette.",
    },
    "he-IL": {
        removeButtonLabel: "\u05D4\u05E1\u05E8",
        removeDescription:
            "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05D7\u05E7 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E1\u05D9\u05E8 \u05EA\u05D2.",
    },
    "hr-HR": { removeButtonLabel: "Ukloni", removeDescription: "Pritisnite Delete za uklanjanje oznake." },
    "hu-HU": {
        removeButtonLabel: "Elt\xe1vol\xedt\xe1s",
        removeDescription: "Nyomja meg a Delete billenty\u0171t a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.",
    },
    "it-IT": { removeButtonLabel: "Rimuovi", removeDescription: "Premi Elimina per rimuovere il tag." },
    "ja-JP": {
        removeButtonLabel: "\u524A\u9664",
        removeDescription:
            "\u30BF\u30B0\u3092\u524A\u9664\u3059\u308B\u306B\u306F\u3001Delete \u30AD\u30FC\u3092\u62BC\u3057\u307E\u3059\u3002",
    },
    "ko-KR": {
        removeButtonLabel: "\uC81C\uAC70",
        removeDescription:
            "\uD0DC\uADF8\uB97C \uC81C\uAC70\uD558\uB824\uBA74 Delete \uD0A4\uB97C \uB204\uB974\uC2ED\uC2DC\uC624.",
    },
    "lt-LT": {
        removeButtonLabel: "Pa\u0161alinti",
        removeDescription:
            "Nor\u0117dami pa\u0161alinti \u017Eym\u0105, paspauskite \u201EDelete\u201C klavi\u0161\u0105.",
    },
    "lv-LV": {
        removeButtonLabel: "No\u0146emt",
        removeDescription: "Nospiediet Delete [Dz\u0113st], lai no\u0146emtu tagu.",
    },
    "nb-NO": { removeButtonLabel: "Fjern", removeDescription: "Trykk p\xe5 Slett for \xe5 fjerne taggen." },
    "nl-NL": { removeButtonLabel: "Verwijderen", removeDescription: "Druk op Verwijderen om de tag te verwijderen." },
    "pl-PL": {
        removeButtonLabel: "Usu\u0144",
        removeDescription: "Naci\u015Bnij Usu\u0144, aby usun\u0105\u0107 znacznik.",
    },
    "pt-BR": { removeButtonLabel: "Remover", removeDescription: "Pressione Delete para remover a tag." },
    "pt-PT": { removeButtonLabel: "Eliminar", removeDescription: "Prima Delete para eliminar a tag." },
    "ro-RO": {
        removeButtonLabel: "\xcendep\u0103rta\u0163i",
        removeDescription: "Ap\u0103sa\u021Bi pe Delete (\u0218tergere) pentru a elimina eticheta.",
    },
    "ru-RU": {
        removeButtonLabel: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        removeDescription:
            "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 DELETE, \u0447\u0442\u043E\u0431\u044B \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0433.",
    },
    "sk-SK": {
        removeButtonLabel: "Odstr\xe1ni\u0165",
        removeDescription: "Ak chcete odstr\xe1ni\u0165 zna\u010Dku, stla\u010Dte kl\xe1ves Delete.",
    },
    "sl-SI": { removeButtonLabel: "Odstrani", removeDescription: "Pritisnite Delete, da odstranite oznako." },
    "sr-SP": { removeButtonLabel: "Ukloni", removeDescription: "Pritisnite Obri\u0161i da biste uklonili oznaku." },
    "sv-SE": { removeButtonLabel: "Ta bort", removeDescription: "Tryck p\xe5 Radera f\xf6r att ta bort taggen." },
    "tr-TR": {
        removeButtonLabel: "Kald\u0131r",
        removeDescription: "Etiketi kald\u0131rmak i\xe7in Sil tu\u015Funa bas\u0131n.",
    },
    "uk-UA": {
        removeButtonLabel: "\u0412\u0438\u043B\u0443\u0447\u0438\u0442\u0438",
        removeDescription:
            "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Delete, \u0449\u043E\u0431 \u0432\u0438\u043B\u0443\u0447\u0438\u0442\u0438 \u0442\u0435\u0433.",
    },
    "zh-CN": {
        removeButtonLabel: "\u5220\u9664",
        removeDescription: "\u6309\u4E0B\u201C\u5220\u9664\u201D\u4EE5\u5220\u9664\u6807\u8BB0\u3002",
    },
    "zh-TW": {
        removeButtonLabel: "\u79FB\u9664",
        removeDescription: "\u6309 Delete \u9375\u4EE5\u79FB\u9664\u6A19\u8A18\u3002",
    },
};
var O = n(113997),
    D = n(356560),
    F = n(766382),
    N = n(126024),
    V = n(389979),
    j = n(867),
    B = n(163675),
    U = n(288371),
    K = n(421114),
    $ = n(102594);
let z = { ltr: "ArrowRight", rtl: "ArrowLeft" },
    W = { ltr: "ArrowLeft", rtl: "ArrowRight" };
function G(e) {
    let t = null,
        n = null;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
var H = n(603432),
    q = n(400274),
    Y = n(334887);
class X {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this._size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        var t;
        let n = this.keyMap.get(e);
        return n && null != (t = n.prevKey) ? t : null;
    }
    getKeyAfter(e) {
        var t;
        let n = this.keyMap.get(e);
        return n && null != (t = n.nextKey) ? t : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(e) {
        var t;
        return null != (t = this.keyMap.get(e)) ? t : null;
    }
    at(e) {
        let t = [...this.getKeys()];
        return this.getItem(t[e]);
    }
    getChildren(e) {
        let t = this.keyMap.get(e);
        return (null == t ? void 0 : t.childNodes) || [];
    }
    constructor(e) {
        var t;
        (this.keyMap = new Map()), (this.firstKey = null), (this.lastKey = null), (this.iterable = e);
        let n = (e) => {
            if ((this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)) for (let t of e.childNodes) n(t);
        };
        for (let t of e) n(t);
        let r = null,
            i = 0,
            a = 0;
        for (let [e, t] of this.keyMap)
            r ? ((r.nextKey = e), (t.prevKey = r.key)) : ((this.firstKey = e), (t.prevKey = void 0)),
                "item" === t.type && (t.index = i++),
                ("section" === t.type || "item" === t.type) && a++,
                ((r = t).nextKey = void 0);
        (this._size = a), (this.lastKey = null != (t = null == r ? void 0 : r.key) ? t : null);
    }
}
var J = n(580722),
    Z = n(52713),
    Q = n(415911);
function ee(e, t) {
    let n = (0, p.useRef)(null);
    (0, p.useEffect)(() => {
        if (null != t.focusedKey && !e.getItem(t.focusedKey) && n.current) {
            var r, i, a, o, s, l, u;
            let c = n.current.getItem(t.focusedKey),
                d = [...n.current.getKeys()]
                    .map((e) => {
                        let t = n.current.getItem(e);
                        return (null == t ? void 0 : t.type) === "item" ? t : null;
                    })
                    .filter((e) => null !== e),
                f = [...e.getKeys()]
                    .map((t) => {
                        let n = e.getItem(t);
                        return (null == n ? void 0 : n.type) === "item" ? n : null;
                    })
                    .filter((e) => null !== e),
                p =
                    (null != (r = null == d ? void 0 : d.length) ? r : 0) -
                    (null != (i = null == f ? void 0 : f.length) ? i : 0),
                h = Math.min(
                    p > 1
                        ? Math.max((null != (a = null == c ? void 0 : c.index) ? a : 0) - p + 1, 0)
                        : null != (o = null == c ? void 0 : c.index)
                          ? o
                          : 0,
                    (null != (s = null == f ? void 0 : f.length) ? s : 0) - 1,
                ),
                m = null,
                g = !1;
            for (; h >= 0; ) {
                if (!t.isDisabled(f[h].key)) {
                    m = f[h];
                    break;
                }
                h < f.length - 1 && !g
                    ? h++
                    : ((g = !0),
                      h > (null != (l = null == c ? void 0 : c.index) ? l : 0) &&
                          (h = null != (u = null == c ? void 0 : c.index) ? u : 0),
                      h--);
            }
            t.setFocusedKey(m ? m.key : null);
        }
        n.current = e;
    }, [e, t]);
}
let et = (0, p.createContext)(null),
    en = (0, p.createContext)(null),
    er = (0, p.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, a.JT)(e, t, et)),
            p.createElement(
                h.Provider,
                { value: null },
                p.createElement(l.GQ, { content: e.children }, (n) =>
                    p.createElement(ei, { props: e, forwardedRef: t, collection: n }),
                ),
            )
        );
    });
function ei({ props: e, forwardedRef: t, collection: n }) {
    var r, i;
    let l,
        u,
        c = (0, p.useRef)(null),
        { id: d, ...g } = e;
    [g, c] = (0, a.JT)(g, c, m.Co);
    let { filter: v, shouldUseVirtualFocus: _, ...I } = g,
        [L, O] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]),
        D =
            ((i = (function (e) {
                let { filter: t, layoutDelegate: n } = e,
                    r = (0, J.R)(e),
                    i = (0, p.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
                    a = (0, p.useCallback)((e) => new X(t ? t(e) : e), [t]),
                    o = (0, p.useMemo)(
                        () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
                        [e.suppressTextValueWarning],
                    ),
                    s = (0, Q.G)(e, a, o),
                    l = (0, p.useMemo)(() => new (0, Z.Y)(s, r, { layoutDelegate: n }), [s, r, n]);
                return ee(s, l), { collection: s, disabledKeys: i, selectionManager: l };
            })({ ...I, children: void 0, collection: n })),
            (l = (0, p.useMemo)(() => (v ? i.collection.filter(v) : i.collection), [i.collection, v])),
            (u = i.selectionManager.withCollection(l)),
            ee(l, u),
            { collection: l, selectionManager: u, disabledKeys: i.disabledKeys }),
        F = (0, f.$)(g, { global: !0 }),
        N = Object.fromEntries(Object.entries(F).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: V,
            labelProps: j,
            descriptionProps: B,
            errorMessageProps: U,
        } = (function (e, t, n) {
            let { direction: r } = (0, M.Y)(),
                i =
                    e.keyboardDelegate ||
                    new (0, T.n)({
                        collection: t.collection,
                        ref: n,
                        orientation: "horizontal",
                        direction: r,
                        disabledKeys: t.disabledKeys,
                        disabledBehavior: t.selectionManager.disabledBehavior,
                    }),
                {
                    labelProps: a,
                    fieldProps: o,
                    descriptionProps: l,
                    errorMessageProps: u,
                } = (0, P.M)({ ...e, labelElementType: "span" }),
                { gridProps: c } = (function (e, t, n) {
                    let {
                        isVirtualized: r,
                        keyboardDelegate: i,
                        layoutDelegate: a,
                        onAction: o,
                        disallowTypeAhead: l,
                        linkBehavior: u = "action",
                        keyboardNavigationBehavior: c = "arrow",
                        escapeKeyBehavior: d = "clearSelection",
                        shouldSelectOnPressUp: h,
                    } = e;
                    e["aria-label"] ||
                        e["aria-labelledby"] ||
                        console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
                    let { listProps: m } = (function (e) {
                            let {
                                    selectionManager: t,
                                    collection: n,
                                    disabledKeys: r,
                                    ref: i,
                                    keyboardDelegate: a,
                                    layoutDelegate: o,
                                } = e,
                                s = (0, C.Q)({ usage: "search", sensitivity: "base" }),
                                l = t.disabledBehavior,
                                u = (0, p.useMemo)(
                                    () =>
                                        a ||
                                        new (0, T.n)({
                                            collection: n,
                                            disabledKeys: r,
                                            disabledBehavior: l,
                                            ref: i,
                                            collator: s,
                                            layoutDelegate: o,
                                        }),
                                    [a, o, n, r, i, s, l],
                                ),
                                { collectionProps: c } = (0, k.y)({
                                    ...e,
                                    ref: i,
                                    selectionManager: t,
                                    keyboardDelegate: u,
                                });
                            return { listProps: c };
                        })({
                            selectionManager: t.selectionManager,
                            collection: t.collection,
                            disabledKeys: t.disabledKeys,
                            ref: n,
                            keyboardDelegate: i,
                            layoutDelegate: a,
                            isVirtualized: r,
                            selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
                            shouldFocusWrap: e.shouldFocusWrap,
                            linkBehavior: u,
                            disallowTypeAhead: l,
                            autoFocus: e.autoFocus,
                            escapeKeyBehavior: d,
                        }),
                        g = (0, w.Bi)(e.id);
                    b.set(t, {
                        id: g,
                        onAction: o,
                        linkBehavior: u,
                        keyboardNavigationBehavior: c,
                        shouldSelectOnPressUp: h,
                    });
                    let v = (0, x.m)({ selectionManager: t.selectionManager, hasItemActions: !!o }),
                        y = (0, S.$)(n, { isDisabled: 0 !== t.collection.size }),
                        _ = (0, f.$)(e, { labelable: !0 }),
                        P = (0, s.v)(
                            _,
                            {
                                role: "grid",
                                id: g,
                                "aria-multiselectable":
                                    "multiple" === t.selectionManager.selectionMode ? "true" : void 0,
                            },
                            0 === t.collection.size ? { tabIndex: y ? -1 : 0 } : m,
                            v,
                        );
                    return (
                        r && ((P["aria-rowcount"] = t.collection.size), (P["aria-colcount"] = 1)),
                        (0, E.H)({}, t),
                        { gridProps: P }
                    );
                })(
                    {
                        ...e,
                        ...o,
                        keyboardDelegate: i,
                        shouldFocusWrap: !0,
                        linkBehavior: "override",
                        keyboardNavigationBehavior: "tab",
                    },
                    t,
                    n,
                ),
                [d, h] = (0, p.useState)(!1),
                { focusWithinProps: m } = (0, A.R)({ onFocusWithinChange: h }),
                g = (0, f.$)(e),
                v = (0, p.useRef)(t.collection.size);
            return (
                (0, p.useEffect)(() => {
                    n.current && v.current > 0 && 0 === t.collection.size && d && n.current.focus(),
                        (v.current = t.collection.size);
                }, [t.collection.size, d, n]),
                R.set(t, { onRemove: e.onRemove }),
                {
                    gridProps: (0, s.v)(c, g, {
                        role: t.collection.size ? "grid" : "group",
                        "aria-atomic": !1,
                        "aria-relevant": "additions",
                        "aria-live": d ? "polite" : "off",
                        ...m,
                        ...o,
                    }),
                    labelProps: a,
                    descriptionProps: l,
                    errorMessageProps: u,
                }
            );
        })({ ...I, ...N, label: O }, D, c);
    return p.createElement(
        "div",
        {
            ...F,
            id: d,
            ref: t,
            slot: e.slot || void 0,
            className: null != (r = e.className) ? r : "react-aria-TagGroup",
            style: e.style,
        },
        p.createElement(
            a.Kq,
            {
                values: [
                    [o.I, { ...j, elementType: "span", ref: L }],
                    [en, { ...V, ref: c }],
                    [h, D],
                    [y.h, { slots: { description: B, errorMessage: U } }],
                ],
            },
            e.children,
        ),
    );
}
let ea = (0, p.forwardRef)(function (e, t) {
    return (0, p.useContext)(h) ? p.createElement(eo, { props: e, forwardedRef: t }) : p.createElement(l.pM, e);
});
function eo({ props: e, forwardedRef: t }) {
    let n = (0, p.useContext)(h),
        { CollectionRoot: r } = (0, p.useContext)(i.zL),
        [o, l] = (0, a.JT)({}, t, en),
        { focusProps: u, isFocused: c, isFocusVisible: d } = (0, I.o)(),
        m = { isEmpty: 0 === n.collection.size, isFocused: c, isFocusVisible: d, state: n },
        g = (0, a.Sl)({ className: e.className, style: e.style, defaultClassName: "react-aria-TagList", values: m }),
        y = (0, i.l2)(n.selectionManager.focusedKey),
        b = (0, f.$)(e, { global: !0 });
    return p.createElement(
        "div",
        {
            ...(0, s.v)(b, g, o, u),
            ref: l,
            "data-empty": 0 === n.collection.size || void 0,
            "data-focused": c || void 0,
            "data-focus-visible": d || void 0,
        },
        p.createElement(
            v.D,
            null,
            0 === n.collection.size && e.renderEmptyState
                ? e.renderEmptyState(m)
                : p.createElement(r, { collection: n.collection, persistedKeys: y }),
        ),
    );
}
let es = (0, l.KU)(u._B, (e, t, n) => {
    let o = (0, p.useContext)(h),
        l = (0, Y.U)(t),
        { focusProps: u, isFocusVisible: c } = (0, I.o)({ within: !1 }),
        {
            rowProps: d,
            gridCellProps: m,
            removeButtonProps: v,
            ...y
        } = (function (e, t, n) {
            var r;
            let { item: i } = e,
                a = (0, H.o)((r = L) && r.__esModule ? r.default : r, "@react-aria/tag"),
                o = (0, w.Bi)(),
                { onRemove: l } = R.get(t) || {},
                {
                    rowProps: u,
                    gridCellProps: c,
                    ...d
                } = (function (e, t, n) {
                    var r, i, a, o, l, u;
                    let { node: c, isVirtualized: d } = e,
                        { direction: f } = (0, M.Y)(),
                        {
                            onAction: h,
                            linkBehavior: m,
                            keyboardNavigationBehavior: g,
                            shouldSelectOnPressUp: v,
                        } = b.get(t),
                        y = (0, w.X1)(),
                        x = (0, p.useRef)(null),
                        E = {},
                        S = e.hasChildItems,
                        k = t.selectionManager.isLink(c.key);
                    if (null != c && "expandedKeys" in t) {
                        let e = null == (a = (o = t.collection).getChildren) ? void 0 : a.call(o, c.key);
                        (S = S || [...(null != e ? e : [])].length > 1),
                            null == h &&
                                !k &&
                                "none" === t.selectionManager.selectionMode &&
                                S &&
                                (h = () => t.toggleKey(c.key));
                        let n = S ? t.expandedKeys.has(c.key) : void 0,
                            r = 1;
                        if (c.level > 0 && (null == c ? void 0 : c.parentKey) != null) {
                            let e = t.collection.getItem(c.parentKey);
                            e &&
                                (r = [
                                    ...(null == (l = (u = t.collection).getChildren) ? void 0 : l.call(u, e.key)),
                                ].filter((e) => "item" === e.type).length);
                        } else r = [...t.collection].filter((e) => 0 === e.level && "item" === e.type).length;
                        E = {
                            "aria-expanded": n,
                            "aria-level": c.level + 1,
                            "aria-posinset": (null == c ? void 0 : c.index) + 1,
                            "aria-setsize": r,
                        };
                    }
                    let { itemProps: T, ...C } = (0, $.p)({
                            selectionManager: t.selectionManager,
                            key: c.key,
                            ref: n,
                            isVirtualized: d,
                            shouldSelectOnPressUp: e.shouldSelectOnPressUp || v,
                            onAction:
                                h || (null == (r = c.props) ? void 0 : r.onAction)
                                    ? (0, V.c)(null == (i = c.props) ? void 0 : i.onAction, h ? () => h(c.key) : void 0)
                                    : void 0,
                            focus: () => {
                                var e;
                                null === n.current ||
                                    ((null == x.current || c.key === x.current) &&
                                        (null == (e = n.current) ? void 0 : e.contains(document.activeElement))) ||
                                    (0, U.l)(n.current);
                            },
                            linkBehavior: m,
                        }),
                        P = (0, D.HI)(c.props),
                        A = C.hasAction ? P : {},
                        R = (0, s.v)(T, A, {
                            role: "row",
                            onKeyDownCapture: (e) => {
                                if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement)
                                    return;
                                let r = (0, K.N$)(n.current);
                                if (
                                    ((r.currentNode = document.activeElement),
                                    "expandedKeys" in t && document.activeElement === n.current)
                                ) {
                                    if (
                                        e.key === z[f] &&
                                        t.selectionManager.focusedKey === c.key &&
                                        S &&
                                        !t.expandedKeys.has(c.key)
                                    ) {
                                        t.toggleKey(c.key), e.stopPropagation();
                                        return;
                                    } else if (
                                        e.key === W[f] &&
                                        t.selectionManager.focusedKey === c.key &&
                                        S &&
                                        t.expandedKeys.has(c.key)
                                    ) {
                                        t.toggleKey(c.key), e.stopPropagation();
                                        return;
                                    }
                                }
                                switch (e.key) {
                                    case "ArrowLeft":
                                        if ("arrow" === g) {
                                            let t = "rtl" === f ? r.nextNode() : r.previousNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, U.l)(t),
                                                    (0, j.o)(t, { containingElement: (0, B.m)(n.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "rtl" === f))
                                                (0, U.l)(n.current),
                                                    (0, j.o)(n.current, { containingElement: (0, B.m)(n.current) });
                                            else {
                                                r.currentNode = n.current;
                                                let e = G(r);
                                                e &&
                                                    ((0, U.l)(e),
                                                    (0, j.o)(e, { containingElement: (0, B.m)(n.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowRight":
                                        if ("arrow" === g) {
                                            let t = "rtl" === f ? r.previousNode() : r.nextNode();
                                            if (t)
                                                e.preventDefault(),
                                                    e.stopPropagation(),
                                                    (0, U.l)(t),
                                                    (0, j.o)(t, { containingElement: (0, B.m)(n.current) });
                                            else if ((e.preventDefault(), e.stopPropagation(), "ltr" === f))
                                                (0, U.l)(n.current),
                                                    (0, j.o)(n.current, { containingElement: (0, B.m)(n.current) });
                                            else {
                                                r.currentNode = n.current;
                                                let e = G(r);
                                                e &&
                                                    ((0, U.l)(e),
                                                    (0, j.o)(e, { containingElement: (0, B.m)(n.current) }));
                                            }
                                        }
                                        break;
                                    case "ArrowUp":
                                    case "ArrowDown":
                                        if (!e.altKey && n.current.contains(e.target)) {
                                            var i;
                                            e.stopPropagation(),
                                                e.preventDefault(),
                                                null == (i = n.current.parentElement) ||
                                                    i.dispatchEvent(
                                                        new KeyboardEvent(e.nativeEvent.type, e.nativeEvent),
                                                    );
                                        }
                                }
                            },
                            onKeyDown: (e) => {
                                if (
                                    e.currentTarget.contains(e.target) &&
                                    n.current &&
                                    document.activeElement &&
                                    "Tab" === e.key &&
                                    "tab" === g
                                ) {
                                    let t = (0, K.N$)(n.current, { tabbable: !0 });
                                    (t.currentNode = document.activeElement),
                                        (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
                                }
                            },
                            onFocus: (e) => {
                                if (((x.current = c.key), e.target !== n.current)) {
                                    (0, F.pP)() || t.selectionManager.setFocusedKey(c.key);
                                    return;
                                }
                            },
                            "aria-label": c.textValue || void 0,
                            "aria-selected": t.selectionManager.canSelectItem(c.key)
                                ? t.selectionManager.isSelected(c.key)
                                : void 0,
                            "aria-disabled": t.selectionManager.isDisabled(c.key) || void 0,
                            "aria-labelledby": y && c.textValue ? `${_(t, c.key)} ${y}` : void 0,
                            id: _(t, c.key),
                        });
                    if (d) {
                        let { collection: e } = t,
                            n = [...e];
                        R["aria-rowindex"] = n.find((e) => "section" === e.type)
                            ? [...e.getKeys()]
                                  .filter((t) => {
                                      var n;
                                      return (null == (n = e.getItem(t)) ? void 0 : n.type) !== "section";
                                  })
                                  .findIndex((e) => e === c.key) + 1
                            : c.index + 1;
                    }
                    return {
                        rowProps: { ...(0, s.v)(R, E) },
                        gridCellProps: { role: "gridcell", "aria-colindex": 1 },
                        descriptionProps: { id: y },
                        ...C,
                    };
                })({ node: i }, t, n),
                { descriptionProps: h, ...m } = d,
                g = t.disabledKeys.has(i.key) || i.props.isDisabled,
                v = (0, F.lb)();
            "virtual" === v && "u" > typeof window && "ontouchstart" in window && (v = "pointer");
            let y = l && ("keyboard" === v || "virtual" === v) ? a.format("removeDescription") : "",
                x = (0, O.I)(y),
                E = i.key === t.selectionManager.focusedKey,
                S = null != t.selectionManager.focusedKey,
                k = -1;
            g || (!E && S) || (k = 0);
            let T = (0, f.$)(i.props),
                C = (0, D.HI)(i.props),
                { focusableProps: P } = (0, N.Wc)({ isDisabled: g }, n);
            return {
                removeButtonProps: {
                    "aria-label": a.format("removeButtonLabel"),
                    "aria-labelledby": `${o} ${u.id}`,
                    isDisabled: g,
                    id: o,
                    onPress: () => (l ? l(new Set([i.key])) : null),
                },
                rowProps: (0, s.v)(P, u, T, C, {
                    tabIndex: k,
                    onKeyDown: l
                        ? (e) => {
                              ("Delete" === e.key || "Backspace" === e.key) &&
                                  (g ||
                                      (e.preventDefault(),
                                      t.selectionManager.isSelected(i.key)
                                          ? null == l || l(new Set(t.selectionManager.selectedKeys))
                                          : null == l || l(new Set([i.key]))));
                          }
                        : void 0,
                    "aria-describedby": x["aria-describedby"],
                }),
                gridCellProps: (0, s.v)(c, {
                    "aria-errormessage": e["aria-errormessage"],
                    "aria-label": e["aria-label"],
                }),
                ...m,
                allowsRemoving: !!l,
            };
        })({ item: n }, o, l),
        { hoverProps: x, isHovered: E } = (0, q.M)({
            isDisabled: !y.allowsSelection,
            onHoverStart: n.props.onHoverStart,
            onHoverChange: n.props.onHoverChange,
            onHoverEnd: n.props.onHoverEnd,
        }),
        S = (0, a.Sl)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...y,
                isFocusVisible: c,
                isHovered: E,
                selectionMode: o.selectionManager.selectionMode,
                selectionBehavior: o.selectionManager.selectionBehavior,
            },
        });
    (0, p.useEffect)(() => {
        n.textValue;
    }, [n.textValue]);
    let k = (0, f.$)(e, { global: !0 });
    return (
        delete k.id,
        delete k.onClick,
        p.createElement(
            "div",
            {
                ref: l,
                ...(0, s.v)(k, S, d, u, x),
                "data-selected": y.isSelected || void 0,
                "data-disabled": y.isDisabled || void 0,
                "data-hovered": E || void 0,
                "data-focused": y.isFocused || void 0,
                "data-focus-visible": c || void 0,
                "data-pressed": y.isPressed || void 0,
                "data-allows-removing": y.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === o.selectionManager.selectionMode ? void 0 : o.selectionManager.selectionMode,
            },
            p.createElement(
                "div",
                { ...m, style: { display: "contents" } },
                p.createElement(
                    a.Kq,
                    {
                        values: [
                            [r.k, { slots: { remove: v } }],
                            [i.zL, i.N],
                            [g.r, { isSelected: y.isSelected }],
                        ],
                    },
                    S.children,
                ),
            ),
        )
    );
});
