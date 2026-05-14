"use strict";
n.r(t), n.d(t, { Playground: () => $, PlaygroundStore: () => W });
var i = n(627968),
    r = n(64700),
    s = n(625903),
    a = n(624479),
    o = n(789645),
    l = n(364522),
    u = n(349288),
    c = n(862328),
    d = n(980707),
    _ = n(477782),
    f = n(67811),
    h = n(922016),
    p = n(691540),
    E = n(990078),
    m = n(408278),
    g = n(398590),
    A = n(839214),
    I = n(58736),
    T = n(856488),
    S = n(269880),
    N = n(25044),
    y = n(957565),
    C = n(761508);
function v(e) {
    let { groups: t, selectedStory: n, onStorySelect: s } = e;
    return (0, i.jsx)(C.V, {
        selectedItem: n,
        orientation: "vertical",
        onItemSelect: (e) => {
            null != e && s(e);
        },
        children: t.map((e, a) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)(C.V.Header, { children: e.title }),
                        e.stories.map((e) =>
                            (0, i.jsx)(
                                C.V.Item,
                                {
                                    selectedItem: n,
                                    id: e.id,
                                    "aria-label": e.name,
                                    onItemSelect: () => {
                                        s(e.id);
                                    },
                                    children: (0, i.jsx)("span", {
                                        "data-testid": `playground-story-${e.id}`,
                                        children: e.name,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                        a < t.length - 1 && (0, i.jsx)(C.V.Separator, {}),
                    ],
                },
                e.title,
            ),
        ),
    });
}
var O = n(503698),
    R = n.n(O),
    b = n(310784),
    D = n.n(b),
    L = n(331322),
    w = n(834730),
    M = n(292666),
    P = n(691885),
    x = n(150934),
    U = n(106236),
    k = n(895925);
function G(e) {
    let { controls: t, props: n, onPropsChange: r } = e,
        s = (e, t) => {
            r({ ...n, [e]: t });
        },
        a = Object.entries(t);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: k.in,
              children: (0, i.jsx)(L.B, {
                  gap: 16,
                  children: a.map((e) => {
                      let [t, r] = e,
                          a = n[t] ?? r.defaultValue;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              "select" === r.type &&
                                  null != r.options &&
                                  (0, i.jsx)(P.l, {
                                      label: r.label,
                                      value: a,
                                      onSelectionChange: (e) => s(t, e),
                                      options: r.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return { id: n, value: n, label: t };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === r.type &&
                                  (0, i.jsx)(x.S, { checked: a, onChange: (e) => s(t, e), label: r.label }),
                              "text" === r.type &&
                                  (0, i.jsx)(M.k, { value: a, onChange: (e) => s(t, e), label: r.label }),
                              "number" === r.type &&
                                  (0, i.jsx)(M.k, {
                                      type: "number",
                                      value: String(a),
                                      min: r.minValue,
                                      onChange: (e) => s(t, Number(e)),
                                      label: r.label,
                                  }),
                              "slider" === r.type &&
                                  (0, i.jsx)(U.A, {
                                      initialValue: null != a ? Number(a) : 0,
                                      value: null != a ? Number(a) : void 0,
                                      minValue: r.minValue,
                                      maxValue: r.maxValue,
                                      keyboardStep: (r.maxValue - r.minValue) * 0.05,
                                      asValueChanges: (e) => s(t, e),
                                      handleSize: 10,
                                      disabled: !1,
                                      stickToMarkers: !1,
                                      fillStyles: {},
                                      label: r.label,
                                      onValueRender: (e) => String(Math.round(1e3 * e) / 1e3),
                                  }),
                              "color" === r.type &&
                                  (0, i.jsxs)("div", {
                                      className: k.fJ,
                                      children: [
                                          (0, i.jsx)(w.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              tag: "label",
                                              children: r.label,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: k.nY,
                                              children: [
                                                  (0, i.jsx)("input", {
                                                      type: "color",
                                                      className: k.oP,
                                                      value: (function (e) {
                                                          if (null == e || "" === e) return F;
                                                          try {
                                                              return D()(e).hex();
                                                          } catch {
                                                              return F;
                                                          }
                                                      })(a),
                                                      onChange: (e) => s(t, e.target.value),
                                                  }),
                                                  (0, i.jsx)(M.k, { value: a ?? "", onChange: (e) => s(t, e) }),
                                              ],
                                          }),
                                      ],
                                  }),
                          ],
                      });
                  }),
              }),
          });
}
let F = "#000000";
function V(e) {
    let t = e.controls,
        n = {};
    return (
        null != t &&
            Object.entries(t).forEach((e) => {
                let [t, i] = e;
                n[t] = i.defaultValue;
            }),
        n
    );
}
function B(e) {
    let t,
        { story: n, controlsLayout: s } = e,
        [a, o] = r.useState(n.id),
        [l, u] = r.useState(() => V(n));
    a !== n.id && (o(n.id), u(V(n)));
    let c = "hidden" !== s && null != n.controls;
    return (0, i.jsxs)("div", {
        className: R()(k.iW, { [k.vT]: "bottom" === s, [k.Ix]: "right" === s }),
        children: [
            (0, i.jsx)("div", {
                className: k.Ji,
                children: (0, i.jsx)("div", {
                    className: k.Dw,
                    children: ((t = n.component), (0, i.jsx)(t, { ...l }, n.id)),
                }),
            }),
            c &&
                null != n.controls &&
                (0, i.jsx)("div", {
                    className: R()(k.ne, { [k.WK]: "bottom" === s, [k.BT]: "right" === s }),
                    children: (0, i.jsx)(G, { controls: n.controls, props: l, onPropsChange: u }),
                }),
        ],
    });
}
var H = n(97483),
    j = n(818348),
    Y = n(375708);
let W = (0, A.D)(() => ({ selectedCollection: null, selectedStory: null, controlsLayout: "right" }));
function K() {
    let e = (0, S.A)(),
        t = (0, T.A)(),
        n = (0, N.A)(),
        s = W.useField("controlsLayout"),
        a = r.useMemo(
            () =>
                (0, i.jsxs)(
                    _.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, i.jsx)(_.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => W.setState({ controlsLayout: "right" }),
                                checked: "right" === s,
                            }),
                            (0, i.jsx)(_.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => W.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === s,
                            }),
                            (0, i.jsx)(_.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => W.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === s,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [s],
        );
    return (0, i.jsxs)(d.W, {
        "data-menu-migrated": !0,
        onSelect: j.tE,
        navId: "playground-settings-menu",
        onClose: j.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(_.Dr, {
                id: "appearance",
                label: Y.intl.string(Y.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), a],
            }),
            (0, i.jsx)(_.Dr, {
                id: "accessibility",
                label: Y.intl.string(Y.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(_.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function z() {
    let e = r.useRef(null);
    return (0, i.jsx)(h.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(K, {}),
        position: "bottom",
        align: "center",
        animation: h.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, i.jsx)(m.K, {
                size: "sm",
                icon: s.Z,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function $(e) {
    let { configs: t } = e,
        n = W.useField("selectedCollection"),
        s = W.useField("selectedStory"),
        d = W.useField("controlsLayout"),
        _ = r.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: h,
            group: A,
            story: T,
        } = r.useMemo(() => {
            let e = null != n ? _.find((e) => e.id === n) : _[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === s)),
                i = t?.stories.find((e) => e.id === s) ?? null;
            return { collection: e, group: t, story: i };
        }, [n, s, _]),
        S = h?.name ?? "Design System",
        N = T?.name;
    return (0, i.jsxs)("div", {
        className: k.zr,
        children: [
            (0, i.jsx)("div", {
                className: k.Os,
                children: _.map((e) =>
                    (0, i.jsx)(
                        c.Q,
                        {
                            children: (0, i.jsx)(E.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, i.jsx)(f.j, {
                                    name: e.name,
                                    selected: (n ?? _[0]?.id) === e.id,
                                    onClick: () => {
                                        var t;
                                        return (
                                            (t = e.id), void W.setState({ selectedCollection: t, selectedStory: null })
                                        );
                                    },
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: k.Qs,
                children: [
                    (0, i.jsxs)(I.Ay, {
                        className: k.wx,
                        children: [
                            null != S ? (0, i.jsx)(I.Ay.Title, { children: S }) : null,
                            null != N
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != S ? (0, i.jsx)(I.Ay.Caret, { className: k.zN }) : null,
                                          (0, i.jsx)(I.Ay.Title, { children: N }),
                                      ],
                                  })
                                : null,
                            T?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(I.Ay.Divider, { className: k.zN }),
                                          (0, i.jsx)(I.Ay.Title, {
                                              children: (0, i.jsx)(u.Anchor, { href: T.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != h
                                ? (0, i.jsx)(m.K, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: a.T,
                                      onClick: () => {
                                          if (null == h) return;
                                          let e =
                                              null != T
                                                  ? `dev://playground/${h.id}/${T.id}`
                                                  : `dev://playground/${h.id}`;
                                          (0, y.C)(e, () =>
                                              (0, p.P0)({
                                                  id: "playground-link-copied",
                                                  message: "Copied playground link",
                                                  type: H.Ck.SUCCESS,
                                              }),
                                          );
                                      },
                                  })
                                : null,
                            (0, i.jsxs)("div", {
                                className: k.IE,
                                children: [
                                    (0, i.jsx)(z, {}),
                                    (0, i.jsx)(m.K, {
                                        size: "sm",
                                        icon: o.P,
                                        "aria-label": Y.intl.string(Y.t.cpT0Cq),
                                        variant: "icon-only",
                                        onClick: g.jH,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: k.MY,
                        children: [
                            (0, i.jsx)(l.Ip, {
                                fade: !0,
                                className: k.pz,
                                children:
                                    null != h
                                        ? (0, i.jsx)(v, {
                                              groups: h.groups,
                                              selectedStory: s,
                                              onStorySelect: (e) => {
                                                  W.setState({ selectedStory: e });
                                              },
                                          })
                                        : null,
                            }),
                            (0, i.jsx)("div", {
                                className: k.Qs,
                                children:
                                    null != T && null != A
                                        ? (0, i.jsx)(B, { story: T, groupTitle: A.title, controlsLayout: d })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
