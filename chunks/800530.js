n.d(t, {
    Cg: () => d,
    Cp: () => h,
    Cs: () => C,
    EY: () => f,
    I5: () => S,
    JQ: () => D,
    RY: () => T,
    Sv: () => m,
    TX: () => P,
    ZW: () => O,
    bK: () => A,
    n0: () => L,
    o6: () => M,
    oE: () => g,
    qS: () => R,
    s: () => p,
    sQ: () => u,
    wo: () => N
});
var i,
    r,
    a,
    s,
    o,
    _,
    E,
    c = n(990547),
    I = n(981631);
function l(e, t, n) {
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
l(u, 'TOS_LINK', 'https://discord.com/terms'), l(u, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), l(u, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), l(u, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), l(u, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), l(u, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__'), l(u, 'LEARN_MORE_UU_APPEAL_LINK', 'https://support.discord.com/hc/articles/360041820932');
class d {}
l(d, 'CLASSIFICATION_ID', 'classification_id'), l(d, 'INCIDENT_TIMESTAMP', 'incident_time');
var N = (((i = {}).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (i.LEARN_MORE_LINK = 'learn_more_link'), i);
class S {}
l(S, 'ICON_TYPE', 'icon_type'), l(S, 'HEADER', 'header'), l(S, 'BODY', 'body'), l(S, 'CTAS', 'ctas'), l(S, 'TIMESTAMP', 'timestamp'), l(S, 'THEME', 'theme'), l(S, 'CLIENT_VERSION_MESSAGE', 'client_version_message'), l(S, 'LEARN_MORE_LINK', 'learn_more_link'), l(S, 'CLASSIFICATION_ID', 'classification_id');
var L = (((r = {})[(r.ViewViolationDetail = 0)] = 'ViewViolationDetail'), (r[(r.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'), (r[(r.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'), (r[(r.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'), (r[(r.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'), (r[(r.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'), (r[(r.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'), (r[(r.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'), r),
    p = (((a = {})[(a.SystemDM = 0)] = 'SystemDM'), (a[(a.StandingTab = 1)] = 'StandingTab'), (a[(a.AppealIngestion = 2)] = 'AppealIngestion'), a);
Object.freeze({
    SPEED_BUMP: I.jXE.APPEAL_INGESTION_SPEED_BUMP,
    COLLECT_SIGNAL: I.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
    CONFIRM_SUBMISSION: I.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    REQUEST_SENT: I.jXE.APPEAL_INGESTION_REQUEST_SENT,
    THANKS: I.jXE.APPEAL_INGESTION_THANKS,
    SPAM: I.jXE.APPEAL_INGESTION_SPAM
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
let P = 2000,
    h = 15000,
    M = 5;
