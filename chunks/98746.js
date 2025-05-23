n.d(t, { default: () => g }), n(388685), n(781311);
var l = n(255367),
    i = n(73800),
    r = n(481060),
    s = n(749210),
    a = n(70097),
    o = n(910693),
    c = n(70956),
    u = n(5192),
    d = n(981631),
    _ = n(388032),
    x = n(918758);
function b() {
    return [
        {
            value: 0,
            label: _.intl.string(_.t['4obaMT'])
        },
        {
            value: +c.Z.Seconds.HOUR,
            label: _.intl.string(_.t.RKpitb)
        },
        {
            value: 6 * c.Z.Seconds.HOUR,
            label: _.intl.string(_.t['8WfJZ2'])
        },
        {
            value: 12 * c.Z.Seconds.HOUR,
            label: _.intl.string(_.t.p1up7u)
        },
        {
            value: +c.Z.Seconds.DAY,
            label: _.intl.string(_.t.XuVkkJ)
        },
        {
            value: 3 * c.Z.Seconds.DAY,
            label: _.intl.string(_.t.gMcDS0)
        },
        {
            value: 7 * c.Z.Seconds.DAY,
            label: _.intl.string(_.t.FA7IUl)
        }
    ];
}
let m = b()[1].value;
function g(e) {
    let { guildId: t, user: c, location: g, userIds: k, onBanMultiple: f, transitionState: p, onClose: E, canBulkBan: C = !1, modReportId: S } = e,
        [h, A] = i.useState(m),
        [v, M] = i.useState(''),
        [j, O] = i.useState(0),
        [I, N] = i.useState(!1),
        R = (0, o.sE)(t, {
            location: g,
            targetUserId: null == c ? void 0 : c.id,
            targets: k
        }),
        z = i.useCallback(() => {
            if (null != f) {
                if (!(null != k && (null == k ? void 0 : k.size) > 0 && C) || I) return;
                if ('' === v.trim() && !I) return void N(!0);
                f(t, [...k], h, v);
            } else {
                if (null == c) return;
                s.Z.banUser(t, null == c ? void 0 : c.id, h, v, S);
            }
            R(o.jQ.BAN), E();
        }, [f, R, E, k, C, I, v, t, h, c, S]),
        T = i.useCallback((e) => {
            A(e);
        }, []),
        y = i.useCallback((e) => {
            let { value: t } = e;
            M(t), N(!1);
        }, []),
        D = i.useCallback(
            (e) => {
                M(e), I && N(!1);
            },
            [I]
        ),
        L = i.useCallback(() => {
            M(''), O(1);
        }, []),
        U = i.useCallback(() => {
            O(0);
        }, []),
        Y = [
            {
                name: _.intl.string(_.t.tamLhY),
                value: _.intl.string(_.t.tamLhY)
            },
            {
                name: _.intl.string(_.t.UmxjMj),
                value: _.intl.string(_.t.UmxjMj)
            },
            {
                name: _.intl.string(_.t.EXY1d3),
                value: _.intl.string(_.t.EXY1d3)
            }
        ],
        Z = (() => {
            if (null != f && null != k) return _.intl.formatToPlainString(_.t.HVJexc, { count: null == k ? void 0 : k.size });
            if (null == c) return '';
            let e = u.ZP.getName(t, null, c);
            return _.intl.formatToPlainString(_.t.jeKpoq, { username: '@'.concat(e) });
        })();
    return (0, l.jsxs)(r.Y0X, {
        transitionState: p,
        children: [
            (0, l.jsx)(r.xBx, {
                separator: !1,
                children: (0, l.jsx)(r.X6q, {
                    variant: 'heading-xl/semibold',
                    children: Z
                })
            }),
            (0, l.jsxs)(r.hzk, {
                className: x.modalContent,
                children: [
                    (0, l.jsxs)(a.Z, {
                        autoPlay: !0,
                        loop: !0,
                        width: 400,
                        children: [
                            (0, l.jsx)('source', {
                                src: n(942314),
                                type: 'video/webm'
                            }),
                            (0, l.jsx)('source', {
                                src: n(888322),
                                type: 'video/mp4'
                            }),
                            (0, l.jsx)('img', {
                                alt: '',
                                src: n(860724)
                            })
                        ]
                    }),
                    (0, l.jsxs)(r.xJW, {
                        title: _.intl.string(_.t.w4Ivys),
                        children: [
                            I &&
                                (0, l.jsx)(r.kzN, {
                                    className: x.error,
                                    children: _.intl.string(_.t.IrYX19)
                                }),
                            (0, l.jsx)(r.qBt, {
                                steps: [0, 1],
                                step: j,
                                children: ((e) => {
                                    switch (j) {
                                        case 0:
                                            return (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(r.FXm, {
                                                        value: v,
                                                        options: e,
                                                        onChange: y,
                                                        radioItemClassName: x.radioItemStyles
                                                    }),
                                                    (0, l.jsxs)(r.P3F, {
                                                        onClick: L,
                                                        className: x.banReasonOtherClickable,
                                                        children: [
                                                            (0, l.jsx)(r.Text, {
                                                                variant: 'text-md/medium',
                                                                color: 'none',
                                                                children: _.intl.string(_.t.BcZTKi)
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
                                                onChange: D,
                                                value: v,
                                                rows: 5,
                                                autoFocus: !0
                                            });
                                    }
                                })(Y)
                            })
                        ]
                    }),
                    (0, l.jsx)(r.xJW, {
                        title: _.intl.string(_.t['8l3W09']),
                        children: (0, l.jsx)(r.q4e, {
                            options: b(),
                            value: h,
                            onChange: T
                        })
                    })
                ]
            }),
            (() => {
                switch (j) {
                    case 0:
                        return (0, l.jsxs)(r.mzw, {
                            className: x.footer,
                            children: [
                                (0, l.jsx)(r.zxk, {
                                    type: 'button',
                                    look: r.zxk.Looks.LINK,
                                    color: r.zxk.Colors.PRIMARY,
                                    onClick: E,
                                    children: _.intl.string(_.t['ETE/oK'])
                                }),
                                (0, l.jsx)(r.zxk, {
                                    type: 'submit',
                                    color: r.zxk.Colors.RED,
                                    size: r.zxk.Sizes.SMALL,
                                    onClick: z,
                                    children: _.intl.string(_.t['5MBJ5O'])
                                })
                            ]
                        });
                    case 1:
                        return (0, l.jsxs)(r.mzw, {
                            className: x.footerStepped,
                            children: [
                                (0, l.jsx)(r.zxk, {
                                    className: x.cancel,
                                    innerClassName: x.cancel,
                                    type: 'button',
                                    look: r.zxk.Looks.LINK,
                                    color: r.zxk.Colors.PRIMARY,
                                    size: r.zxk.Sizes.SMALL,
                                    onClick: U,
                                    children: _.intl.string(_.t['13/7kZ'])
                                }),
                                (0, l.jsx)(r.zxk, {
                                    type: 'submit',
                                    color: r.zxk.Colors.RED,
                                    size: r.zxk.Sizes.SMALL,
                                    onClick: z,
                                    children: _.intl.string(_.t['5MBJ5O'])
                                })
                            ]
                        });
                }
            })()
        ]
    });
}
