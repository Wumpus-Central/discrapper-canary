n.d(t, {
    Ay: () => T,
    Oh: () => I,
    gn: () => S,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(314116),
    o = n(990078),
    l = n(397927),
    c = n(721768),
    u = n(842209),
    d = n(392054),
    f = n(332173),
    p = n(406704),
    _ = n(253932),
    h = n(734057),
    m = n(31717),
    g = n(576705),
    E = n(309010),
    b = n(203982),
    y = n(652215),
    O = n(73510);
n(827669);
var A = n(985018);

function v(e, t, n, r, i) {
    if (null == e) return;
    let a = () => {
        let a = h.A.getChannel(e);
        if (null == a) return;
        let { command: s, application: o } = u.EW(
            {
                channel: a,
                type: "channel",
            },
            n,
            i,
        );
        if (null != s && s.untranslatedName === t) {
            var l, f;
            b._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: e,
            });
            let t =
                null != o
                    ? {
                          type: d.Hf.APPLICATION,
                          id: o.id,
                          icon: o.icon,
                          name: null != (l = null == o || null == (f = o.bot) ? void 0 : f.username) ? l : o.name,
                          application: o,
                      }
                    : null;
            c.Gf({
                channelId: e,
                command: null,
                section: null,
            }),
                c.Gf({
                    channelId: e,
                    command: s,
                    section: t,
                    location: r,
                });
        }
    };
    "" !== m.A.getDraft(e, m.C.ChannelMessage)
        ? (0, s.A)({
              title: A.intl.string(A.t.pe26Cj),
              subtitle: A.intl.string(A.t["+awCIy"]),
              confirmText: A.intl.string(A.t.VkKicb),
              onConfirm: () => a(),
              onCloseCallback: () => {
                  b._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, {
                      channelId: e,
                  });
              },
          })
        : a();
}

function S(e) {
    var t;
    let { node: n, stateKey: s, children: o } = e,
        l = (0, a.bG)([h.A, E.A], () => {
            var e;
            return h.A.getChannel(null != (e = n.channelId) ? e : E.A.getChannelId());
        }, [n.channelId]),
        { hasSendMessagePerm: c, hasUseAppCommandsPerm: m } = (0, a.cf)([g.A], () => ({
            hasSendMessagePerm: g.A.can(y.xBc.SEND_MESSAGES, l),
            hasUseAppCommandsPerm: g.A.can(y.xBc.USE_APPLICATION_COMMANDS, l),
        })),
        b =
            void 0 !== l
                ? {
                      type: "channel",
                      channel: l,
                  }
                : {
                      type: "contextless",
                  },
        { command: A } = u.D3(b, null != (t = n.commandKey) ? t : ""),
        S = _.D_.useSetting(),
        I = i.useMemo(() => {
            if (null == A || null == l || A.untranslatedName !== n.commandName || S) return !1;
            let e = l.isPrivate();
            if ((0, p.UJ)(l) || (!e && !c)) return !1;
            let t = (null == A ? void 0 : A.applicationId) === O.Ik.BUILT_IN;
            return !!e || !!t || !!m;
        }, [l, A, c, m, n.commandName, S]),
        T = i.useCallback(
            (e) => {
                null == e || e.stopPropagation(),
                    null != l &&
                        null != n.commandName &&
                        null != n.commandKey &&
                        v(l.id, n.commandName, n.commandKey, d.Oh.MENTION);
            },
            [l, n.commandKey, n.commandName],
        );
    return I
        ? (0, r.jsxs)(
              f.A,
              {
                  role: "link",
                  onClick: T,
                  children: ["/", o],
              },
              s,
          )
        : (0, r.jsxs)("span", {
              children: ["/", o],
          });
}

function I(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: s, onClick: c } = e,
        u = (0, a.bG)([E.A], () => E.A.getChannelId()),
        f = (e) => {
            null == e || e.stopPropagation(), v(u, n, t, d.Oh.POPULAR_COMMANDS, s), null == c || c(t);
        };
    return (0, r.jsx)(o.m, {
        text: i,
        position: "top",
        children: (0, r.jsx)(l.Button, {
            size: "sm",
            variant: "secondary",
            onClick: f,
            text: "".concat("/").concat(n),
        }),
    });
}

function T(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(S, {
                node: e,
                stateKey: n.key,
                children: t(e.content, n),
            }),
    };
}
