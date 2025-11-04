n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(399606),
    o = n(481060),
    s = n(367907),
    a = n(863249),
    c = n(944163),
    d = n(454585),
    u = n(626135),
    m = n(981631),
    p = n(388032),
    f = n(802179);
function g(e) {
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
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    var t;
    let {
            guild: n,
            prompts: x,
            completeOnboarding: v,
            setCurrentStep: _,
            disableTracking: j,
            previousPromptIndex: b,
        } = e,
        O = i.useRef(null),
        N = (0, l.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)),
        [y, P] = i.useState(null != (t = null == N ? void 0 : N.response) && t),
        C = (0, l.e7)([c.Z], () => c.Z.get(n.id)),
        E = i.useRef(null),
        Z = i.useRef(null),
        D = i.useCallback(async () => {
            if (null != C && null != N) {
                try {
                    await a.ZP.submitVerificationForm(
                        n.id,
                        h(g({}, C), { formFields: [h(g({}, N), { response: y })] }),
                    );
                } catch (e) {}
                v();
            }
        }, [n.id, C, N, y, v]);
    function I(e) {
        let [t] = e;
        t.isIntersecting && P(!0);
    }
    return (i.useEffect(() => {
        let e = new IntersectionObserver(I, {
                root: E.current,
                rootMargin: "0px",
                threshold: 0,
            }),
            t = Z.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [Z, E]),
    null == N)
        ? null
        : (0, r.jsx)("div", {
              className: f.prompt,
              children: (0, r.jsxs)("div", {
                  className: f.promptContent,
                  ref: E,
                  children: [
                      (0, r.jsxs)(o.h21, {
                          className: f.scrollerContent,
                          ref: O,
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: p.intl.string(p.t["b1JC+l"]),
                              }),
                              (0, r.jsx)(o.Heading, {
                                  variant: "heading-xl/semibold",
                                  children: p.intl.string(p.t.prJqwT),
                              }),
                              (0, r.jsx)("div", {
                                  className: f.termsFieldBody,
                                  ref: Z,
                                  children: N.values.map((e, t) =>
                                      (0, r.jsxs)(
                                          "div",
                                          {
                                              className: f.termsRow,
                                              children: [
                                                  (0, r.jsx)(o.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: "".concat(t + 1, "."),
                                                  }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: "text-sm/normal",
                                                      className: f.termsRowContent,
                                                      children: d.Z.parseGuildVerificationFormRule(e, !0, {
                                                          channelId: n.rulesChannelId,
                                                      }),
                                                  }),
                                              ],
                                          },
                                          "term-".concat(t),
                                      ),
                                  ),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", { className: f.overlay }),
                      (0, r.jsxs)("div", {
                          className: f.navButtons,
                          children: [
                              (0, r.jsx)("div", {
                                  className: f.leftButtons,
                                  children:
                                      -1 !== b &&
                                      "cover" !== b &&
                                      (0, r.jsx)(o.Button, {
                                          variant: "secondary",
                                          size: "md",
                                          text: p.intl.string(p.t["13/7kX"]),
                                          onClick: () => {
                                              !j &&
                                                  (u.default.track(
                                                      m.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                                                      h(g({}, (0, s.hH)(n.id)), {
                                                          step: -1,
                                                          skipped: !1,
                                                          back: !0,
                                                          options_selected: 0,
                                                          in_onboarding: !0,
                                                          is_final_step: !1,
                                                      }),
                                                  ),
                                                  "number" == typeof b &&
                                                      b >= 0 &&
                                                      u.default.track(
                                                          m.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                                                          h(g({}, (0, s.hH)(n.id)), {
                                                              step: b,
                                                              required: x[b].required,
                                                          }),
                                                      )),
                                                  _(b);
                                          },
                                          icon: o.j9r,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: f.rightButtons,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          className: f.helpText,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: y ? p.intl.string(p.t.arAe3I) : p.intl.string(p.t.D0CVAc),
                                      }),
                                      (0, r.jsx)(o.Button, {
                                          variant: "primary",
                                          size: "md",
                                          text: "".concat(p.intl.string(p.t["8SuVoE"]), " \uD83C\uDF89"),
                                          onClick: D,
                                          disabled: !y,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
