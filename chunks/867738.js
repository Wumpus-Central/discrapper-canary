n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(780042),
    o = n(822123),
    l = n(207284),
    c = n(4703),
    u = n(672594),
    d = n(732139),
    f = n(307731),
    p = n(836553);
let _ = (e) => {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: _,
            emojiListRef: h,
            onKeyDown: m,
            onFocus: g,
            autoFocus: E,
            searchBarRef: b,
            diversitySurrogate: y,
            isBurstReaction: O,
            onBurstReactionToggle: A,
            renderHeader: v,
        } = e,
        S = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.A, {
                    emojiListRef: h,
                    gridNavigatorId: d.lq,
                    onKeyDown: m,
                    ref: b,
                    onFocus: g,
                    autoFocus: E,
                    defaultSearchPlaceholder: (0, o.wT)(i, O),
                }),
                i === f.b_.REACTION
                    ? (0, r.jsx)(s.A, {
                          checked: O,
                          onClick: A,
                      })
                    : null,
                null != n
                    ? n
                    : (0, r.jsx)(c.A, {
                          searchBarRef: b,
                          className: p.fx,
                          selectedSurrogate: y,
                      }),
                (0, r.jsx)(l.A, { channel: t }),
            ],
        });
    return (0, r.jsx)("div", {
        className: a()(p.wx, _),
        children: null != v ? v(S) : S,
    });
};
