n.d(t, { $: () => b, default: () => S });
var l = n(627968),
    i = n(64700),
    s = n(189213),
    a = n(452027),
    r = n(243721),
    o = n(990078),
    c = n(355622),
    d = n(408018),
    u = n(201349),
    m = n(659617),
    h = n(474078),
    x = n(747926),
    g = n(55294),
    f = n(706411),
    j = n(376310),
    p = n(652215),
    v = n(375708),
    A = n(521503);
let C = c.oU.CREATE_GAME_INVITE_POST_DESCRIPTION,
    b = "create-game-invite-post",
    N = () => Promise.resolve({ shouldClear: !1, shouldRefocus: !1 });
function S(e) {
    let t,
        { parentChannel: n, transitionState: c, onClose: S } = e,
        E = i.useMemo(() => n.availableTags ?? [], [n.availableTags]),
        [{ textValue: y, richValue: T }, R] = i.useState(() => (0, d.N3)()),
        [k, I] = i.useState(!1),
        [M, _] = i.useState(() => new Set()),
        [w, D] = i.useState(!1),
        L = i.useMemo(() => E.find((e) => e.name === f.Dg), [E]),
        P = null == L || !M.has(L.id),
        O = i.useCallback((e, t, n) => {
            R({ textValue: t, richValue: n });
        }, []),
        F = i.useCallback((e) => {
            _((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, []),
        U = i.useCallback(
            (e) => {
                null != L &&
                    _((t) => {
                        let n = new Set(t);
                        return e ? n.delete(L.id) : n.add(L.id), n;
                    });
            },
            [L],
        ),
        z = ((t = y.trim().split("\n")[0] ?? ""), (0, h.A)(t.slice(0, p.Ign), !0)),
        G = (0, m.w0)({ parentChannel: n, name: z, appliedTags: M, upload: g.Se }),
        H = !w && y.length > 0 && y.length <= 120,
        B = i.useCallback(async () => {
            if (H) {
                D(!0);
                try {
                    let e = await G(y);
                    (0, x.JA)(e), S();
                } catch {
                    D(!1);
                }
            }
        }, [H, G, S, y]);
    return (0, l.jsx)(s.Modal, {
        title: v.intl.string(v.t.tOsHsu),
        transitionState: c,
        onClose: S,
        actions: [
            { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: S, disabled: w },
            { variant: "primary", text: v.intl.string(v.t.CumH4u), onClick: B, disabled: !H, loading: w },
        ],
        children: (0, l.jsxs)("div", {
            className: A.r,
            children: [
                (0, l.jsx)(a.D, {
                    required: !0,
                    label: v.intl.string(v.t["/mEbGf"]),
                    children: (0, l.jsx)(u.Ay, {
                        type: C,
                        channel: n,
                        placeholder: v.intl.string(v.t["SU/IAE"]),
                        textValue: y,
                        richValue: T,
                        focused: k,
                        onChange: O,
                        onFocus: () => I(!0),
                        onBlur: () => I(!1),
                        onSubmit: N,
                        parentModalKey: b,
                        disableThemedBackground: !0,
                        maxCharacterCount: 120,
                        showRemainingCharsAfterCount: 120,
                    }),
                }),
                E.length > 0
                    ? (0, l.jsx)(a.D, {
                          label: v.intl.string(v.t.KM6lRG),
                          description: v.intl.string(v.t["yoIAe/"]),
                          children: (0, l.jsx)("div", {
                              className: A.G,
                              children: E.map((e) =>
                                  (0, l.jsx)(
                                      j.A,
                                      { tag: e, size: j.A.Sizes.SMALL, selected: M.has(e.id), onClick: () => F(e.id) },
                                      e.id,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, l.jsx)(a.D, {
                    layout: "horizontal",
                    label: v.intl.string(v.t.Xd2NFi),
                    description: v.intl.string(v.t.G91SYQ),
                    children: (0, l.jsx)(o.m, {
                        text: v.intl.formatToPlainString(v.t["0s2ICk"], { noMicTagName: f.Dg }),
                        shouldShow: null == L,
                        asContainer: !0,
                        children: (0, l.jsx)(r.d, { checked: P, onChange: U, disabled: null == L }),
                    }),
                }),
            ],
        }),
    });
}
