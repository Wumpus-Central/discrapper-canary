n.d(t, { d: () => S, default: () => y });
var l = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(452027),
    r = n(243721),
    o = n(990078),
    c = n(192308),
    d = n(355622),
    u = n(408018),
    m = n(201349),
    h = n(659617),
    x = n(474078),
    g = n(747926),
    f = n(55294),
    j = n(706411),
    p = n(376310),
    v = n(652215),
    A = n(375708),
    C = n(632159);
let N = d.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    b = "create-game-invite-post";
function S(e) {
    (0, c.openModalLazy)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 879382));
            return (n) => (0, l.jsx)(t, { ...n, parentChannel: e });
        },
        { modalKey: b },
    );
}
let E = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function y(e) {
    let t,
        { parentChannel: n, transitionState: c, onClose: d } = e,
        S = i.useMemo(() => n.availableTags ?? [], [n.availableTags]),
        [{ textValue: y, richValue: T }, I] = i.useState(() => (0, u.N3)()),
        [R, k] = i.useState(!1),
        [M, _] = i.useState(() => new Set()),
        [w, D] = i.useState(!1),
        L = i.useMemo(() => S.find((e) => e.name === j.Dg), [S]),
        P = null == L || !M.has(L.id),
        O = i.useCallback((e, t, n) => {
            I({ textValue: t, richValue: n });
        }, []),
        F = i.useCallback((e) => {
            _((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        G = i.useCallback(
            (e) => {
                null != L &&
                    _((t) => {
                        let n = new Set(t);
                        return e ? n.delete(L.id) : n.add(L.id), n;
                    });
            },
            [L],
        ),
        U = ((t = y.trim().split("\n")[0] ?? ""), (0, x.A)(t.slice(0, v.Ign), !0)),
        z = (0, h.w0)({ parentChannel: n, name: U, appliedTags: M, upload: f.Se }),
        H = !w && y.length > 0 && y.length <= 120,
        B = i.useCallback(async () => {
            if (H) {
                D(!0);
                try {
                    let e = await z(y);
                    (0, g.JA)(e), d();
                } catch {
                    D(!1);
                }
            }
        }, [H, z, d, y]);
    return (0, l.jsx)(s.Modal, {
        title: A.intl.string(A.t.tOsHsu),
        transitionState: c,
        onClose: d,
        actions: [
            { variant: "secondary", text: A.intl.string(A.t["ETE/oC"]), onClick: d, disabled: w },
            { variant: "primary", text: A.intl.string(A.t.CumH4u), onClick: B, disabled: !H, loading: w },
        ],
        children: (0, l.jsxs)("div", {
            className: C.r,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: A.intl.string(A.t["/mEbGf"]),
                    children: (0, l.jsx)(m.Ay, {
                        type: N,
                        channel: n,
                        placeholder: A.intl.string(A.t["SU/IAE"]),
                        textValue: y,
                        richValue: T,
                        focused: R,
                        onChange: O,
                        onFocus: () => k(!0),
                        onBlur: () => k(!1),
                        onSubmit: E,
                        parentModalKey: b,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                    }),
                }),
                S.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: A.intl.string(A.t.KM6lRG),
                          description: A.intl.string(A.t["yoIAe/"]),
                          children: (0, l.jsx)("div", {
                              className: C.G,
                              children: S.map((e) =>
                                  (0, l.jsx)(
                                      p.A,
                                      { tag: e, size: p.A.Sizes.SMALL, selected: M.has(e.id), onClick: () => F(e.id) },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(a.D, {
                    layout: "horizontal",
                    label: A.intl.string(A.t.Xd2NFi),
                    description: A.intl.string(A.t.G91SYQ),
                    children: (0, l.jsx)(o.m, {
                        text: A.intl.formatToPlainString(A.t["0s2ICk"], { noMicTagName: j.Dg }),
                        shouldShow: null == L,
                        asContainer: !0,
                        children: (0, l.jsx)(r.d, { checked: P, onChange: G, disabled: null == L }),
                    }),
                }),
            ],
        }),
    });
}
