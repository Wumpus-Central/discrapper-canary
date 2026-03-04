"use strict";
n.d(t, { K: () => I, default: () => N });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(236698),
    E = n(668131),
    c = n(797632),
    _ = n(468035),
    d = n(304937),
    A = n(985018),
    u = n(158677);
function T(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: c } = e,
        { getSurveyResponses: T, setResponse: I, trackDisplayedQuestions: N } = (0, E.i)(),
        R = T(t),
        S = (0, _.i)(n),
        [O, C] = r.useState(S.blockId),
        [p, P] = r.useState(S.pageIndex),
        [D, M] = r.useState(!1),
        g = (e, n) => {
            I(t, e, n);
        },
        U = r.useCallback(
            () => (
                D
                    ? s()
                    : (0, a.qfG)((e) =>
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
                              children: (0, i.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  children: A.intl.string(A.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [s, D],
        ),
        m = r.useMemo(() => (null == O ? [] : (0, _.uy)(n, { blockId: O, pageIndex: p, responses: R })), [n, O, p, R]),
        h = r.useCallback(() => {
            if (null == n || null == O) return;
            let e = (0, _.vt)(n, { blockId: O, pageIndex: p, responses: R });
            N(t, m), e.isComplete && o.Ay.submitSurveyResponse(t, R), C(e.blockId), P(e.pageIndex), M(e.isComplete);
        }, [n, O, p, R, t, m, N]);
    r.useEffect(() => {
        0 === m.length && h();
    }, [m, h]);
    let y = r.useMemo(() => {
        if (D) return !1;
        for (let e of m) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = R[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [D, m, n, R]);
    return D
        ? (0, i.jsxs)(l.Modal, {
              transitionState: c,
              onClose: s,
              size: "md",
              title: A.intl.string(A.t.OSqLUF),
              actions: [{ variant: "primary", text: A.intl.string(A.t.i4jeWR), onClick: s }],
              children: [
                  (0, i.jsx)(a.Text, { variant: "text-md/normal", children: A.intl.string(A.t["2scvdw"]) }),
                  (0, i.jsx)(a.Text, { variant: "text-md/normal", children: A.intl.string(A.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(l.Modal, {
              transitionState: c,
              onClose: U,
              title: A.intl.string(A.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: A.intl.string(A.t.PDTjLN), onClick: h, disabled: !y }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === m.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: u.Qs,
                                children: m.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              d.A,
                                              { question: t, questionId: e, responses: R, onResponseChange: g },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function I(e) {
    null != (await o.Ay.fetchSurveyDetails(e)) &&
        (E.i.getState().clearSurveyResponses(e),
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 814249));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function N(e) {
    let { surveyId: t, onClose: n, transitionState: r } = e,
        l = (0, s.bG)([c.A], () => c.A.getSurvey(t));
    return null == l
        ? (0, i.jsx)(a.Text, { variant: "text-md/medium", className: u.Lq, children: A.intl.string(A.t.MKDeyL) })
        : (0, i.jsx)(T, { surveyId: t, survey: l, onClose: n, transitionState: r });
}
