var n = r(518206),
    i = r(809297);
function o(e, t) {
    (e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
        e.dispatchEvent(new FocusEvent("focusin", { bubbles: !0, relatedTarget: t })));
}
r.d(
    t,
    {},
    {
        Ig: o,
        vX: function (e) {
            var t, r, a;
            let s,
                l,
                u =
                    ((t = (0, i.TW)(e)),
                    (s = (0, n.bq)(t)),
                    ((l = s?.getAttribute("aria-activedescendant")) && t.getElementById(l)) || s);
            u !== e &&
                (u &&
                    ((r = u),
                    (a = e),
                    r.dispatchEvent(new FocusEvent("blur", { relatedTarget: a })),
                    r.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: a }))),
                e && o(e, u));
        },
    },
);
