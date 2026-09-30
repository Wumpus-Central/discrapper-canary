(n.d(t, { A: () => w }), n(321073));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(741918),
    u = n(17928),
    c = n(228366),
    d = n(608299),
    m = n(155718),
    h = n(775602),
    p = n(260762),
    f = n(861382),
    g = n(522602),
    x = n(234320),
    A = n(215497),
    C = n(834730),
    E = n(939249),
    I = n(780777),
    y = n(565150),
    S = n(424170),
    v = n(31717),
    N = n(914905),
    _ = n(650583),
    j = n(375708),
    b = n(40974);
function T(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!1),
        c = g.A.getUpload(t, n.name, v.C.SlashCommand),
        h = i.useRef(null),
        p = n.type === m.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: f,
            typesFormattedString: x,
            validateFilenames: T,
            showInvalidFileTypeAlert: R,
        } = (0, S.M1)(p),
        O = i.useCallback(() => {
            u(!0);
        }, []),
        L = i.useCallback(() => {
            u(!1);
        }, []),
        M = i.useCallback(
            (e, l) => {
                if (f.length > 0 && !T([e.name])) return R();
                let i = { id: n.name, file: e, platform: y.xz.WEB, origin: l };
                d.A.setFile({ channelId: t, id: n.name, file: i, draftType: v.C.SlashCommand, allowOptimization: !1 });
            },
            [f.length, T, n.name, t, R],
        ),
        k = i.useCallback(
            (e) => {
                u(!1);
                let t = e.dataTransfer?.files[0];
                null != t && M(t, "drag_drop");
            },
            [M],
        );
    return (i.useEffect(() => {
        let e = h.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", O, !1),
                e?.addEventListener("dragleave", L, !1),
                e?.addEventListener("drop", k, !1)),
            () => {
                (e?.removeEventListener("dragover", O, !1),
                    e?.removeEventListener("dragleave", L, !1),
                    e?.removeEventListener("drop", k, !1));
            }
        );
    }, [c, O, L, k]),
    null != c)
        ? (0, l.jsx)(N.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: s,
              draftType: v.C.SlashCommand,
              label: (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsxs)(C.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, l.jsx)(C.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, l.jsxs)(A.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: function (e) {
                  e.key === _.dh.ENTER && (e.preventDefault(), a.current?.activateUploadDialogue());
              },
              className: r()(b.xd, { [b.LB]: o }),
              draftType: v.C.SlashCommand,
              ref: h,
              children: [
                  (0, l.jsx)("span", { className: r()(b.fS, { [b.Vg]: o }), children: n.displayName }),
                  (0, l.jsx)(E.D, {
                      className: b.uN,
                      onClick: () => a.current?.activateUploadDialogue(),
                      children: (0, l.jsxs)("div", {
                          className: b.wi,
                          children: [
                              (0, l.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: b.H9, alt: "" }),
                              (0, l.jsx)(C.E, {
                                  className: b.L,
                                  variant: "text-sm/normal",
                                  children:
                                      null != x ? j.intl.format(j.t.JJzx48, { types: x }) : j.intl.string(j.t.IJyOUf),
                              }),
                              (0, l.jsx)(I.A, {
                                  ref: a,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (M(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: f.length > 0 ? [{ name: "", extensions: f }] : void 0,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: b.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var R = n(652215),
    O = n(714731),
    L = n(969490);
let M = [];
function k(e) {
    let { channelId: t, type: n, ignoreUploadId: s, smallAttachments: C = !1 } = e,
        E = (0, u.bG)([h.Ay], () => h.Ay.keyboardModeEnabled),
        I = (0, p.A)("attachments", o.Gl.HORIZONTAL),
        y = (0, u.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: S,
            commandOptions: v,
            commandOptionStates: _,
        } = (0, u.cf)([f.A], () => {
            let e = f.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: M, commandOptionStates: null };
            let n = f.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        j = i.useMemo(() => v?.filter((e) => e.type === m.n4.ATTACHMENT && _?.[e.name]?.hasValue) ?? [], [v, _]),
        [b, k] = i.useState([]);
    i.useEffect(() => {
        function e() {
            d.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let w = i.useCallback(() => {
        I.focusFirstVisibleItem();
    }, [I]);
    (0, x.Vo)({ event: R.jej.FOCUS_ATTACHMENT_AREA, handler: w });
    let P = { isApplicationCommand: S, previousUploadOptions: b, uploadOptions: j },
        D = i.useRef(P);
    (i.useEffect(() => {
        D.current = P;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: l, uploadOptions: i } = D.current;
            if (e) {
                let e = [];
                (l.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    k(i));
            }
        }, [t, j.length, n]));
    let U = y.filter((e) => e.id !== s);
    return (!S && 0 === U.length) || (S && 0 === j.length)
        ? null
        : (0, l.jsx)(a.hD, {
              navigator: I,
              children: (0, l.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...s } = e;
                      return (0, l.jsx)("ul", {
                          ref: i,
                          ...s,
                          className: r()(O.I, L.KK),
                          children: S
                              ? j.map((e) => (0, l.jsx)(T, { channelId: t, keyboardModeEnabled: E, option: e }, e.name))
                              : U.map((e) =>
                                    (0, l.jsx)(
                                        N.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: E,
                                            clip: e.clip,
                                            size: C ? A.L.SMALL : A.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let w = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreUploadId: s, smallAttachments: r = !1 } = e;
    return i ? (0, l.jsx)(k, { channelId: t, type: n, ignoreUploadId: s, smallAttachments: r }) : null;
});
