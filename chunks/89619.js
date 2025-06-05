a.d(i, { default: () => j }), a(388685), a(953529);
var t = a(255367),
    n = a(73800),
    s = a(120356),
    l = a.n(s),
    o = a(481060),
    r = a(313201),
    m = a(309081),
    d = a(35463),
    c = a(489887),
    h = a(388032),
    x = a(787791);
let u = (0, r.hQ)();
function j(e) {
    var i;
    let { channelId: a, answer: s, onSave: r, transitionState: j, onClose: _ } = e,
        {
            emoji: g,
            hasUpload: p,
            upload: C,
            mediaUrl: k,
            mediaFilename: v
        } = (0, d.Z)({
            channelId: a,
            localCreationAnswerId: s.localCreationAnswerId,
            image: s.image
        }),
        [w, z] = n.useState(null != (i = null == C ? void 0 : C.description) ? i : '');
    return (0, t.jsxs)(o.Y0X, {
        size: o.CgR.DYNAMIC,
        className: l()(x.modal, {
            [x.hasImage]: p,
            [x.hasEmoji]: null != g
        }),
        transitionState: j,
        'aria-label': h.intl.string(h.t.QbhHBQ),
        parentComponent: 'PollCreationAnswerAltTextModal',
        children: [
            (0, t.jsx)(m.I, {
                hasUpload: p,
                mediaUrl: k,
                mediaFilename: v,
                imageClassName: x.imagePreview,
                emoji: g,
                emojiClassName: x.emojiPreview
            }),
            (0, t.jsxs)(o.hzk, {
                className: x.content,
                children: [
                    (0, t.jsx)(o.vwX, {
                        tag: o.RB0.LABEL,
                        htmlFor: u,
                        children: h.intl.string(h.t['/2Gnoa'])
                    }),
                    (0, t.jsx)(o.oil, {
                        id: u,
                        value: w,
                        inputClassName: x.input,
                        onChange: z,
                        maxLength: c.WA,
                        autoFocus: !0
                    })
                ]
            }),
            (0, t.jsxs)(o.mzw, {
                className: x.footer,
                children: [
                    (0, t.jsx)(o.zxk, {
                        look: o.iLD.FILLED,
                        size: o.zxk.Sizes.MEDIUM,
                        onClick: () => {
                            null != w && r(w), _();
                        },
                        children: (0, t.jsx)(o.Text, {
                            variant: 'text-md/semibold',
                            children: h.intl.string(h.t.R3BPHx)
                        })
                    }),
                    (0, t.jsx)(o.zxk, {
                        look: o.iLD.LINK,
                        size: o.zxk.Sizes.MEDIUM,
                        onClick: _,
                        children: (0, t.jsx)(o.Text, {
                            variant: 'text-md/semibold',
                            children: h.intl.string(h.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
}
