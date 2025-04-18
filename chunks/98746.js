s.d(t, { default: () => p }), s(388685), s(781311);
var l = s(200651),
    n = s(192379),
    r = s(481060),
    o = s(749210),
    a = s(70097),
    i = s(910693),
    c = s(70956),
    u = s(5192),
    d = s(981631),
    x = s(388032),
    m = s(918758);
function b() {
    return [
        {
            value: 0,
            label: x.NW.string(x.t['4obaMT'])
        },
        {
            value: +c.Z.Seconds.HOUR,
            label: x.NW.string(x.t.RKpitb)
        },
        {
            value: 6 * c.Z.Seconds.HOUR,
            label: x.NW.string(x.t['8WfJZ2'])
        },
        {
            value: 12 * c.Z.Seconds.HOUR,
            label: x.NW.string(x.t.p1up7u)
        },
        {
            value: +c.Z.Seconds.DAY,
            label: x.NW.string(x.t.XuVkkJ)
        },
        {
            value: 3 * c.Z.Seconds.DAY,
            label: x.NW.string(x.t.gMcDS0)
        },
        {
            value: 7 * c.Z.Seconds.DAY,
            label: x.NW.string(x.t.FA7IUl)
        }
    ];
}
let k = b()[1].value;
function p(e) {
    let { guildId: t, user: c, location: p, userIds: h, onBanMultiple: N, transitionState: g, onClose: j, canBulkBan: C = !1 } = e,
        [f, W] = n.useState(k),
        [v, z] = n.useState(''),
        [S, _] = n.useState(0),
        [L, R] = n.useState(!1),
        Z = (0, i.sE)(t, {
            location: p,
            targetUserId: null == c ? void 0 : c.id,
            targets: h
        }),
        I = n.useCallback(() => {
            if (null != N) {
                if (!(null != h && (null == h ? void 0 : h.size) > 0 && C) || L) return;
                if ('' === v.trim() && !L) return void R(!0);
                N(t, [...h], f, v);
            } else {
                if (null == c) return;
                o.Z.banUser(t, null == c ? void 0 : c.id, f, v);
            }
            Z(i.jQ.BAN), j();
        }, [N, Z, j, h, C, L, v, t, f, c]),
        w = n.useCallback((e) => {
            W(e);
        }, []),
        y = n.useCallback((e) => {
            let { value: t } = e;
            z(t), R(!1);
        }, []),
        M = n.useCallback(
            (e) => {
                z(e), L && R(!1);
            },
            [L]
        ),
        Y = n.useCallback(() => {
            z(''), _(1);
        }, []),
        A = n.useCallback(() => {
            _(0);
        }, []),
        O = [
            {
                name: x.NW.string(x.t.tamLhY),
                value: x.NW.string(x.t.tamLhY)
            },
            {
                name: x.NW.string(x.t.UmxjMj),
                value: x.NW.string(x.t.UmxjMj)
            },
            {
                name: x.NW.string(x.t.EXY1d3),
                value: x.NW.string(x.t.EXY1d3)
            }
        ],
        U = (() => {
            if (null != N && null != h) return x.NW.formatToPlainString(x.t.HVJexc, { count: null == h ? void 0 : h.size });
            if (null == c) return '';
            let e = u.ZP.getName(t, null, c);
            return x.NW.formatToPlainString(x.t.jeKpoq, { username: '@'.concat(e) });
        })();
    return (0, l.jsxs)(r.Y0X, {
        transitionState: g,
        children: [
            (0, l.jsx)(r.xBx, {
                separator: !1,
                children: (0, l.jsx)(r.X6q, {
                    variant: 'heading-xl/semibold',
                    children: U
                })
            }),
            (0, l.jsxs)(r.hzk, {
                className: m.modalContent,
                children: [
                    (0, l.jsxs)(a.Z, {
                        autoPlay: !0,
                        loop: !0,
                        width: 400,
                        children: [
                            (0, l.jsx)('source', {
                                src: s(942314),
                                type: 'video/webm'
                            }),
                            (0, l.jsx)('source', {
                                src: s(888322),
                                type: 'video/mp4'
                            }),
                            (0, l.jsx)('img', {
                                alt: '',
                                src: s(860724)
                            })
                        ]
                    }),
                    (0, l.jsxs)(r.xJW, {
                        title: x.NW.string(x.t.w4Ivys),
                        children: [
                            L &&
                                (0, l.jsx)(r.kzN, {
                                    className: m.error,
                                    children: x.NW.string(x.t.IrYX19)
                                }),
                            (0, l.jsx)(r.qBt, {
                                steps: [0, 1],
                                step: S,
                                children: ((e) => {
                                    switch (S) {
                                        case 0:
                                            return (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(r.FXm, {
                                                        value: v,
                                                        options: e,
                                                        onChange: y,
                                                        radioItemClassName: m.radioItemStyles
                                                    }),
                                                    (0, l.jsxs)(r.P3F, {
                                                        onClick: Y,
                                                        className: m.banReasonOtherClickable,
                                                        children: [
                                                            (0, l.jsx)(r.Text, {
                                                                variant: 'text-md/medium',
                                                                color: 'none',
                                                                children: x.NW.string(x.t.BcZTKi)
                                                            }),
                                                            (0, l.jsx)(r.Fbu, {
                                                                color: 'currentColor',
                                                                size: 'xs'
                                                            })
                                                        ]
                                                    })
                                                ]
                                            });
                                        case 1:
                                            return (0, l.jsx)(r.Kx8, {
                                                maxLength: d.GNZ,
                                                onChange: M,
                                                value: v,
                                                rows: 5,
                                                autoFocus: !0
                                            });
                                    }
                                })(O)
                            })
                        ]
                    }),
                    (0, l.jsx)(r.xJW, {
                        title: x.NW.string(x.t['8l3W09']),
                        children: (0, l.jsx)(r.q4e, {
                            options: b(),
                            value: f,
                            onChange: w
                        })
                    })
                ]
            }),
            (() => {
                switch (S) {
                    case 0:
                        return (0, l.jsxs)(r.mzw, {
                            className: m.footer,
                            children: [
                                (0, l.jsx)(r.zxk, {
                                    type: 'button',
                                    look: r.zxk.Looks.LINK,
                                    color: r.zxk.Colors.PRIMARY,
                                    onClick: j,
                                    children: x.NW.string(x.t['ETE/oK'])
                                }),
                                (0, l.jsx)(r.zxk, {
                                    type: 'submit',
                                    color: r.zxk.Colors.RED,
                                    size: r.zxk.Sizes.SMALL,
                                    onClick: I,
                                    children: x.NW.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                    case 1:
                        return (0, l.jsxs)(r.mzw, {
                            className: m.footerStepped,
                            children: [
                                (0, l.jsx)(r.zxk, {
                                    className: m.cancel,
                                    innerClassName: m.cancel,
                                    type: 'button',
                                    look: r.zxk.Looks.LINK,
                                    color: r.zxk.Colors.PRIMARY,
                                    size: r.zxk.Sizes.SMALL,
                                    onClick: A,
                                    children: x.NW.string(x.t['13/7kZ'])
                                }),
                                (0, l.jsx)(r.zxk, {
                                    type: 'submit',
                                    color: r.zxk.Colors.RED,
                                    size: r.zxk.Sizes.SMALL,
                                    onClick: I,
                                    children: x.NW.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                }
            })()
        ]
    });
}
