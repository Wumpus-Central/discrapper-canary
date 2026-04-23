"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(780042),
    o = n(822123),
    l = n(207284),
    u = n(4703),
    c = n(672594),
    d = n(732139),
    _ = n(307731),
    f = n(873426);
let p = (e) => {
    let {
            channel: t,
            accessory: n,
            pickerIntention: i,
            headerClassName: p,
            emojiListRef: h,
            onKeyDown: E,
            onFocus: m,
            autoFocus: g,
            searchBarRef: A,
            diversitySurrogate: I,
            isBurstReaction: T,
            onBurstReactionToggle: S,
            renderHeader: y,
            showAddEmojiButton: N = !0,
        } = e,
        v = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.A, {
                    emojiListRef: h,
                    gridNavigatorId: d.lq,
                    onKeyDown: E,
                    ref: A,
                    onFocus: m,
                    autoFocus: g,
                    defaultSearchPlaceholder: (0, o.wT)(i, T),
                }),
                i === _.EmojiIntention.REACTION ? (0, r.jsx)(a.A, { checked: T, onClick: S }) : null,
                n ?? (0, r.jsx)(u.A, { searchBarRef: A, className: f.fx, selectedSurrogate: I }),
                i !== _.EmojiIntention.NO_CUSTOM_EMOJI && N ? (0, r.jsx)(l.A, { channel: t }) : null,
            ],
        });
    return (0, r.jsx)("div", { className: s()(f.wx, p), children: null != y ? y(v) : v });
};
