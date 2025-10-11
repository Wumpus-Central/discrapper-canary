n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(399606),
    a = n(481060),
    o = n(367907),
    s = n(863249),
    c = n(944163),
    u = n(454585),
    d = n(626135),
    m = n(981631),
    f = n(388032),
    p = n(802179);
function h(e) {
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
function g(e, t) {
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
            setCurrentStep: j,
            disableTracking: _,
            previousPromptIndex: b,
        } = e,
        O = l.useRef(null),
        y = (0, i.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)),
        [N, C] = l.useState(null != (t = null == y ? void 0 : y.response) && t),
        P = (0, i.e7)([c.Z], () => c.Z.get(n.id)),
        E = l.useRef(null),
        Z = l.useRef(null),
        I = l.useCallback(async () => {
            if (null != P && null != y) {
                try {
                    await s.ZP.submitVerificationForm(
                        n.id,
                        g(h({}, P), { formFields: [g(h({}, y), { response: N })] }),
                    );
                } catch (e) {}
                v();
            }
        }, [n.id, P, y, N, v]);
    function w(e) {
        let [t] = e;
        t.isIntersecting && C(!0);
    }
    return (l.useEffect(() => {
        let e = new IntersectionObserver(w, {
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
    null == y)
        ? null
        : (0, r.jsx)("div", {
              className: p.prompt,
              children: (0, r.jsxs)("div", {
                  className: p.promptContent,
                  ref: E,
                  children: [
                      (0, r.jsxs)(a.h21, {
                          className: p.scrollerContent,
                          ref: O,
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: f.intl.string(f.t["b1JC+v"]),
                              }),
                              (0, r.jsx)(a.Heading, {
                                  variant: "heading-xl/semibold",
                                  children: f.intl.string(f.t.prJqwc),
                              }),
                              (0, r.jsx)("div", {
                                  className: p.termsFieldBody,
                                  ref: Z,
                                  children: y.values.map((e, t) =>
                                      (0, r.jsxs)(
                                          "div",
                                          {
                                              className: p.termsRow,
                                              children: [
                                                  (0, r.jsx)(a.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: "".concat(t + 1, "."),
                                                  }),
                                                  (0, r.jsx)(a.Text, {
                                                      variant: "text-sm/normal",
                                                      className: p.termsRowContent,
                                                      children: u.Z.parseGuildVerificationFormRule(e, !0, {
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
                      (0, r.jsx)("div", { className: p.overlay }),
                      (0, r.jsxs)("div", {
                          className: p.navButtons,
                          children: [
                              (0, r.jsx)("div", {
                                  className: p.leftButtons,
                                  children:
                                      -1 !== b &&
                                      (0, r.jsx)(a.Button, {
                                          variant: "secondary",
                                          size: "md",
                                          text: f.intl.string(f.t["13/7kZ"]),
                                          onClick: () => {
                                              !_ &&
                                                  (d.default.track(
                                                      m.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                                                      g(h({}, (0, o.hH)(n.id)), {
                                                          step: -1,
                                                          skipped: !1,
                                                          back: !0,
                                                          options_selected: 0,
                                                          in_onboarding: !0,
                                                          is_final_step: !1,
                                                      }),
                                                  ),
                                                  b >= 0 &&
                                                      d.default.track(
                                                          m.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                                                          g(h({}, (0, o.hH)(n.id)), {
                                                              step: b,
                                                              required: x[b].required,
                                                          }),
                                                      )),
                                                  j(b);
                                          },
                                          icon: a.j9r,
                                          iconPosition: "start",
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: p.rightButtons,
                                  children: [
                                      (0, r.jsx)(a.Text, {
                                          className: p.helpText,
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: N ? f.intl.string(f.t.arAe3N) : f.intl.string(f.t.D0CVAQ),
                                      }),
                                      (0, r.jsx)(a.Button, {
                                          variant: "primary",
                                          size: "md",
                                          text: "".concat(f.intl.string(f.t["8SuVoK"]), " \uD83C\uDF89"),
                                          onClick: I,
                                          disabled: !N,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
