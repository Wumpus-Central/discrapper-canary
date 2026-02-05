"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(780042),
    o = n(822123),
    l = n(207284),
    u = n(4703),
    c = n(672594),
    d = n(732139),
    _ = n(307731),
    f = n(836553);
let p = (e) => {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: p,
            emojiListRef: h,
            onKeyDown: m,
            onFocus: g,
            autoFocus: E,
            searchBarRef: A,
            diversitySurrogate: I,
            isBurstReaction: T,
            onBurstReactionToggle: y,
            renderHeader: S,
        } = e,
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.A, {
                    emojiListRef: h,
                    gridNavigatorId: d.lq,
                    onKeyDown: m,
                    ref: A,
                    onFocus: g,
                    autoFocus: E,
                    defaultSearchPlaceholder: (0, o.wT)(i, T),
                }),
                i === _.b_.REACTION ? (0, r.jsx)(s.A, { checked: T, onClick: y }) : null,
                n ?? (0, r.jsx)(u.A, { searchBarRef: A, className: f.fx, selectedSurrogate: I }),
                (0, r.jsx)(l.A, { channel: t }),
            ],
        });
    return (0, r.jsx)("div", { className: a()(f.wx, p), children: null != S ? S(v) : v });
};
