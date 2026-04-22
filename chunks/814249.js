"use strict";
n.d(t, { K: () => T, default: () => N });
var i = n(627968),
    r = n(64700),
    l = n(189213),
    s = n(311907),
    a = n(192308),
    o = n(834730),
    c = n(236698),
    u = n(668131),
    d = n(797632),
    _ = n(468035),
    E = n(304937),
    A = n(985018),
    m = n(772954);
function I(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: d } = e,
        { getSurveyResponses: I, setResponse: T, trackDisplayedQuestions: N } = (0, u.i)(),
        g = I(t),
        p = (0, _.i)(n),
        [C, f] = r.useState(p.blockId),
        [h, R] = r.useState(p.pageIndex),
        [S, O] = r.useState(!1),
        x = (e, n) => {
            T(t, e, n);
        },
        M = r.useCallback(
            () => (
                S
                    ? s()
                    : (0, a.openModal)((e) =>
                          (0, i.jsx)(l.Modal, {
                              title: A.intl.string(A.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: A.intl.string(A.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: A.intl.string(A.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), s();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(o.E, {
                                  variant: "text-md/normal",
                                  children: A.intl.string(A.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [s, S],
        ),
        D = r.useMemo(() => (null == C ? [] : (0, _.uy)(n, { blockId: C, pageIndex: h, responses: g })), [n, C, h, g]),
        P = r.useCallback(() => {
            if (null == n || null == C) return;
            let e = (0, _.vt)(n, { blockId: C, pageIndex: h, responses: g });
            N(t, D), e.isComplete && c.Ay.submitSurveyResponse(t, g), f(e.blockId), R(e.pageIndex), O(e.isComplete);
        }, [n, C, h, g, t, D, N]);
    r.useEffect(() => {
        0 === D.length && P();
    }, [D, P]);
    let U = r.useMemo(() => {
        if (S) return !1;
        for (let e of D) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = g[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [S, D, n, g]);
    return S
        ? (0, i.jsxs)(l.Modal, {
              transitionState: d,
              onClose: s,
              size: "md",
              title: A.intl.string(A.t.OSqLUF),
              actions: [{ variant: "primary", text: A.intl.string(A.t.i4jeWR), onClick: s }],
              children: [
                  (0, i.jsx)(o.E, { variant: "text-md/normal", children: A.intl.string(A.t["2scvdw"]) }),
                  (0, i.jsx)(o.E, { variant: "text-md/normal", children: A.intl.string(A.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(l.Modal, {
              transitionState: d,
              onClose: M,
              title: A.intl.string(A.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: A.intl.string(A.t.PDTjLN), onClick: P, disabled: !U }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === D.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: m.Qs,
                                children: D.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              E.A,
                                              { question: t, questionId: e, responses: g, onResponseChange: x },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function T(e) {
    null != (await c.Ay.fetchSurveyDetails(e)) &&
        (u.i.getState().clearSurveyResponses(e),
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 814249));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function N(e) {
    let { surveyId: t, onClose: n, transitionState: r } = e,
        l = (0, s.bG)([d.A], () => d.A.getSurvey(t));
    return null == l
        ? (0, i.jsx)(o.E, { variant: "text-md/medium", className: m.Lq, children: A.intl.string(A.t.MKDeyL) })
        : (0, i.jsx)(I, { surveyId: t, survey: l, onClose: n, transitionState: r });
}
