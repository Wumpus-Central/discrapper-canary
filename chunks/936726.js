n.d(t, { Z: () => Z }), n(35282), n(388685), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(544891),
    s = n(846519),
    c = n(668339),
    d = n(248514),
    u = n(681715),
    m = n(481060),
    b = n(668781),
    p = n(139387),
    g = n(308063),
    f = n(600164),
    h = n(208567),
    x = n(598077),
    j = n(259580),
    v = n(768581),
    O = n(572004),
    y = n(709054),
    C = n(51144),
    N = n(486199),
    S = n(981631),
    I = n(388032),
    T = n(191607);
function E(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, v.ov)({
              id: e.id,
              avatar: t,
              discriminator: S.fo$,
          });
}
function Z(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: l,
            channelOptions: v,
            isExpanded: Z,
            isNew: w,
            errors: P,
            onToggleExpand: _,
        } = e,
        [k, A] = r.useState(!1),
        [D] = r.useState(new s.V7());
    r.useEffect(() => () => D.stop(), [D]);
    let R = r.useMemo(() => E(n, n.avatar), [n]),
        L = r.useCallback(() => {
            let e = "".concat((0, o.K0)(!1)).concat(S.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, O.JG)(e);
        }, [n]),
        M = r.useCallback(() => {
            (0, d.Z)({
                title: I.intl.formatToPlainString(I.t.QVFjHh, { name: n.name }),
                subtitle: I.intl.format(I.t["rIWe+5"], { name: n.name }),
                confirmText: I.intl.string(I.t["W+K1Fs"]),
                cancelText: I.intl.string(I.t.xNhj0O),
                onConfirm: () => {
                    g.Z.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? b.Z.show({
                                  title: I.intl.string(I.t.N5riYn),
                                  body: I.intl.string(I.t.eAxcCc),
                              })
                            : b.Z.show({
                                  title: I.intl.string(I.t.N5riYn),
                                  body: I.intl.string(I.t["/4TwKf"]),
                              });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        U = [];
    null != n.user
        ? U.push({
              icon: m.T39,
              text: I.intl.formatToPlainString(I.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new x.Z(e);
                      return C.ZP.getUserTag(t);
                  })(n.user),
                  timestamp: y.default.extractTimestamp(n.id),
              }),
          })
        : U.push({
              icon: m.T39,
              text: I.intl.formatToPlainString(I.t["7mv59O"], { timestamp: y.default.extractTimestamp(n.id) }),
          });
    let B = null;
    return (
        Z &&
            null != l &&
            (B = (0, i.jsxs)("div", {
                className: T.body,
                children: [
                    (0, i.jsx)(m.izJ, { className: T.topDivider }),
                    (0, i.jsxs)(f.Z, {
                        children: [
                            (0, i.jsx)(f.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(f.Z, {
                                    className: T.avatarWrapper,
                                    direction: f.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(h.Z, {
                                            image: l.avatar,
                                            onChange: (e) => {
                                                p.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => E(n, e),
                                            imageClassName: T.avatarUploaderInner,
                                            showIcon: !0,
                                        }),
                                        null != P.avatar && "" !== P.avatar
                                            ? (0, i.jsx)(m.Text, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: P.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsxs)(f.Z, {
                                direction: f.Z.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(f.Z, {
                                        children: [
                                            (0, i.jsx)(f.Z.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, i.jsx)(m.oil, {
                                                    label: I.intl.string(I.t.ukdxuo),
                                                    value: l.name,
                                                    onChange: (e) => {
                                                        p.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: P.name,
                                                }),
                                            }),
                                            (0, i.jsx)(f.Z.Child, {
                                                basis: "50%",
                                                children: (0, i.jsx)("div", {
                                                    children: (0, i.jsx)(c.d, {
                                                        label: I.intl.string(I.t.GK18KJ),
                                                        value: l.channel_id,
                                                        options: v,
                                                        onChange: (e) => {
                                                            p.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: I.intl.string(I.t.r2ptsz),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(m.izJ, { className: T.bottomDivider }),
                                    (0, i.jsxs)(f.Z, {
                                        children: [
                                            (0, i.jsx)(u.u, {
                                                text: I.intl.string(I.t.wwdb3g),
                                                shouldShow: k,
                                                children: (0, i.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: T.copyButton,
                                                    children: (0, i.jsx)(m.Button, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: I.intl.string(I.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            A(!0),
                                                                m.uvj.announce(I.intl.string(I.t.wwdb3g)),
                                                                D.start(1000, () => A(!1)),
                                                                L();
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)(m.Button, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: I.intl.string(I.t.jVrUnC),
                                                onClick: M,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(m.Zbd, {
            editable: !0,
            id: t,
            className: a()(T.card, w ? T.pulse : null),
            children: (0, i.jsxs)(f.Z, {
                direction: f.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(m.P3F, {
                        className: T.header,
                        "aria-expanded": Z,
                        onClick: _,
                        children: (0, i.jsxs)(f.Z, {
                            align: f.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(N.Z, {
                                    name: n.name,
                                    imageSrc: R,
                                    details: U,
                                }),
                                (0, i.jsx)(j.Z, {
                                    className: T.expandIcon,
                                    expanded: Z,
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
                    B,
                ],
            }),
        })
    );
}
