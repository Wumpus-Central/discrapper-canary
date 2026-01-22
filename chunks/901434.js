n.d(t, { A: () => a }), n(321073);
var l = n(64700),
    r = n(417597),
    i = n(591552);
function a(e) {
    let t = (0, r.yK)([i.A], () => i.A.getEnabledOnboardingPrompts(e));
    return l.useMemo(() => {
        let e = 0,
            n = [],
            l = [],
            r = [],
            i = [];
        for (var a = 0; a < t.length; a++) {
            let s = t[a];
            s.isNew
                ? n.push(s)
                : s.hasNewAnswers
                  ? (l.push(s), (e += s.options.filter((e) => e.isUnseen).length))
                  : s.inOnboarding
                    ? i.push(s)
                    : r.push(s);
        }
        return {
            onboardingPromptsRaw: t,
            newOnboardingPrompts: n,
            onboardingPromptsWithNewAnswers: l,
            newAnswersCount: e,
            onboardingPrompts: r.concat(i),
        };
    }, [t]);
}
