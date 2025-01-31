n.d(t, {
    Cg: () => d,
    Cs: () => C,
    EY: () => f,
    I5: () => N,
    JQ: () => D,
    RY: () => T,
    Sv: () => m,
    ZW: () => O,
    bK: () => A,
    n0: () => L,
    o6: () => P,
    oE: () => g,
    qS: () => R,
    s: () => p,
    sQ: () => u,
    wo: () => S
});
var i,
    r,
    a,
    s,
    o,
    _,
    E,
    c = n(990547),
    l = n(981631);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u {}
I(u, 'TOS_LINK', 'https://discord.com/terms'), I(u, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), I(u, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), I(u, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), I(u, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), I(u, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__'), I(u, 'LEARN_MORE_UU_APPEAL_LINK', 'https://support.discord.com/hc/articles/360041820932');
class d {}
I(d, 'CLASSIFICATION_ID', 'classification_id'), I(d, 'INCIDENT_TIMESTAMP', 'incident_time');
var S = (((i = {}).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (i.LEARN_MORE_LINK = 'learn_more_link'), i);
class N {}
I(N, 'ICON_TYPE', 'icon_type'), I(N, 'HEADER', 'header'), I(N, 'BODY', 'body'), I(N, 'CTAS', 'ctas'), I(N, 'TIMESTAMP', 'timestamp'), I(N, 'THEME', 'theme'), I(N, 'CLIENT_VERSION_MESSAGE', 'client_version_message'), I(N, 'LEARN_MORE_LINK', 'learn_more_link'), I(N, 'CLASSIFICATION_ID', 'classification_id');
var L = (((r = {})[(r.ViewViolationDetail = 0)] = 'ViewViolationDetail'), (r[(r.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'), (r[(r.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'), (r[(r.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'), (r[(r.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'), (r[(r.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'), (r[(r.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'), (r[(r.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'), r),
    p = (((a = {})[(a.SystemDM = 0)] = 'SystemDM'), (a[(a.StandingTab = 1)] = 'StandingTab'), (a[(a.AppealIngestion = 2)] = 'AppealIngestion'), a);
Object.freeze({
    SPEED_BUMP: l.jXE.APPEAL_INGESTION_SPEED_BUMP,
    COLLECT_SIGNAL: l.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
    CONFIRM_SUBMISSION: l.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    REQUEST_SENT: l.jXE.APPEAL_INGESTION_REQUEST_SENT,
    THANKS: l.jXE.APPEAL_INGESTION_THANKS,
    SPAM: l.jXE.APPEAL_INGESTION_SPAM
});
var A = (((s = {})[(s.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'), (s[(s.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'), (s[(s.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'), (s[(s.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE'), s);
let T = [0, 1, 2, 3],
    m = 372,
    f = 279,
    O = { impression_group: c.ImpressionGroups.APPEAL_INGESTION };
var C = (((o = {}).SPEED_BUMP = 'speed-bump'), (o.COLLECT_SIGNAL = 'collect-signal'), (o.CONFIRM_SUBMISSION = 'confirm-submission'), (o.REQUEST_SENT = 'request-sent'), (o.THANKS = 'thanks'), o);
let D = {
    'speed-bump': {
        next: 'collect-signal',
        prev: null
    },
    'collect-signal': {
        next: 'confirm-submission',
        prev: 'speed-bump'
    },
    'confirm-submission': {
        next: 'request-sent',
        prev: 'collect-signal'
    },
    'request-sent': {
        next: null,
        prev: null
    }
};
var R = (((_ = {})[(_.USER = 1)] = 'USER'), (_[(_.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (_[(_.GUILD_MEMBER = 3)] = 'GUILD_MEMBER'), _),
    g = (((E = {}).LOADING = 'loading'), (E.ERROR = 'error'), (E.SUCCESS = 'success'), (E.FAILURE = 'failure'), (E.NONE = 'none'), E);
let P = 5;
