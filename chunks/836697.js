n.d(t, { Z: () => O }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(110924),
    s = n(693546),
    c = n(863249),
    u = n(937111),
    d = n(914010),
    p = n(289090),
    f = n(727258),
    h = n(234383),
    g = n(179809),
    m = n(588275),
    b = n(388032),
    _ = n(264096);
function y(e) {
    let { onActivate: t, children: n } = e,
        s = i.useRef(null),
        d = (0, l.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()),
        p = i.useCallback(() => {
            c.ZP.clearCoachmark();
        }, []),
        f = (0, a.Z)(d),
        h = i.useRef(null);
    return (
        i.useEffect(() => {
            if (d && d !== f) {
                var e, n, r, i, l;
                t(),
                    null == (l = h.current) ||
                        null == (i = l.ref) ||
                        null == (r = i.current) ||
                        null == (n = r.layerRef) ||
                        null == (e = n.current) ||
                        e.updatePosition();
            }
        }, [h, d, f, t]),
        (0, r.jsxs)("div", {
            className: _.container,
            children: [
                (0, r.jsx)(o.yRy, {
                    ref: h,
                    targetElementRef: s,
                    shouldShow: d,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: _.popoutContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: _.popoutContent,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: _.coachmarkTextContainer,
                                            children: [
                                                (0, r.jsx)(o.Heading, {
                                                    variant: "heading-md/medium",
                                                    children: b.intl.string(b.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: b.intl.string(b.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(o.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: b.intl.string(b.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: p,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: _.popoutCaretLeft }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            "div",
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (n = n =
                                {
                                    className: _.popoutAnchor,
                                    ref: s,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                        );
                    },
                }),
                n,
            ],
        })
    );
}
function O(e) {
    let { onActivate: t } = e,
        [n, O] = i.useState(!1),
        v = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        j = (0, l.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
        x = (0, h.Z)(),
        C = (0, a.Z)(v),
        E = i.useMemo(() => {
            let e = (0, f.qQ)({
                folderId: p.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: b.intl.string(b.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of x) e.children.push((0, f.Mg)(t, e.id));
            return e;
        }, [x, n]);
    i.useEffect(() => {
        n && !j && s.Z.fetchRequestToJoinGuilds();
    }, [n, j]);
    let S = null != v && x.includes(v);
    return (i.useEffect(() => {
        !n && S && C !== v && O(!0);
    }, [n, S, C, v]),
    0 === x.length)
        ? null
        : (0, r.jsx)(y, {
              onActivate: t,
              children: (0, r.jsx)(g.Z, {
                  folderNode: E,
                  expanded: n,
                  selected: S,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      O(!n), c.ZP.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: _.pendingFolderButtonIcon,
                      children: (0, r.jsx)(o.wGF, {
                          size: "sm",
                          color: "currentColor",
                      }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== f.eD.GUILD
                          ? null
                          : (0, r.jsx)(
                                m.Z,
                                {
                                    guildNode: e,
                                    "aria-setsize": n,
                                    "aria-posinset": t,
                                },
                                e.id,
                            );
                  },
              }),
          });
}
