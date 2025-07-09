(a.d(i, { default: () => _ }), a(388685), a(953529));
var t = a(255367),
    n = a(73800),
    s = a(120356),
    l = a.n(s),
    o = a(755721),
    r = a(481060),
    m = a(313201),
    d = a(309081),
    c = a(35463),
    h = a(489887),
    x = a(388032),
    u = a(787791);
let j = (0, m.hQ)();
function _(e) {
    var i;
    let { channelId: a, answer: s, onSave: m, transitionState: _, onClose: g } = e,
        {
            emoji: p,
            hasUpload: C,
            upload: v,
            mediaUrl: w,
            mediaFilename: z
        } = (0, c.Z)({
            channelId: a,
            localCreationAnswerId: s.localCreationAnswerId,
            image: s.image
        }),
        [I, k] = n.useState(null != (i = null == v ? void 0 : v.description) ? i : '');
    return (0, t.jsxs)(r.Y0X, {
        size: r.CgR.DYNAMIC,
        className: l()(u.modal, {
            [u.hasImage]: C,
            [u.hasEmoji]: null != p
        }),
        transitionState: _,
        'aria-label': x.intl.string(x.t.QbhHBQ),
        parentComponent: 'PollCreationAnswerAltTextModal',
        children: [
            (0, t.jsx)(d.I, {
                hasUpload: C,
                mediaUrl: w,
                mediaFilename: z,
                imageClassName: u.imagePreview,
                emoji: p,
                emojiClassName: u.emojiPreview
            }),
            (0, t.jsxs)(r.hzk, {
                className: u.content,
                children: [
                    (0, t.jsx)(r.vwX, {
                        tag: r.RB0.LABEL,
                        htmlFor: j,
                        children: x.intl.string(x.t['/2Gnoa'])
                    }),
                    (0, t.jsx)(r.oil, {
                        id: j,
                        value: I,
                        inputClassName: u.input,
                        onChange: k,
                        maxLength: h.WA,
                        autoFocus: !0
                    })
                ]
            }),
            (0, t.jsxs)(r.mzw, {
                className: u.footer,
                children: [
                    (0, t.jsx)(o.zx, {
                        look: o.iL.FILLED,
                        size: o.zx.Sizes.MEDIUM,
                        onClick: () => {
                            (null != I && m(I), g());
                        },
                        children: (0, t.jsx)(r.Text, {
                            variant: 'text-md/semibold',
                            children: x.intl.string(x.t.R3BPHx)
                        })
                    }),
                    (0, t.jsx)(o.zx, {
                        look: o.iL.LINK,
                        size: o.zx.Sizes.MEDIUM,
                        onClick: g,
                        children: (0, t.jsx)(r.Text, {
                            variant: 'text-md/semibold',
                            children: x.intl.string(x.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
}
