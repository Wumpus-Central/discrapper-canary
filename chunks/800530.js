n.d(t, {
    Cg: () => h,
    Cs: () => S,
    EY: () => I,
    I5: () => g,
    JQ: () => T,
    RY: () => E,
    Sv: () => v,
    ZW: () => N,
    bK: () => C,
    n0: () => f,
    o6: () => j,
    oE: () => A,
    qS: () => b,
    s: () => x,
    sQ: () => _,
    wo: () => p
});
var i,
    l,
    a,
    r,
    s,
    o,
    c,
    d = n(990547),
    u = n(981631);
function m(e, t, n) {
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
class _ {}
m(_, 'TOS_LINK', 'https://discord.com/terms'), m(_, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), m(_, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), m(_, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), m(_, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), m(_, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__'), m(_, 'LEARN_MORE_UU_APPEAL_LINK', 'https://support.discord.com/hc/articles/360041820932');
class h {}
m(h, 'CLASSIFICATION_ID', 'classification_id'), m(h, 'INCIDENT_TIMESTAMP', 'incident_time');
var p = (((i = {}).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (i.LEARN_MORE_LINK = 'learn_more_link'), i);
class g {}
m(g, 'ICON_TYPE', 'icon_type'), m(g, 'HEADER', 'header'), m(g, 'BODY', 'body'), m(g, 'CTAS', 'ctas'), m(g, 'TIMESTAMP', 'timestamp'), m(g, 'THEME', 'theme'), m(g, 'CLIENT_VERSION_MESSAGE', 'client_version_message'), m(g, 'LEARN_MORE_LINK', 'learn_more_link'), m(g, 'CLASSIFICATION_ID', 'classification_id');
var f = (((l = {})[(l.ViewViolationDetail = 0)] = 'ViewViolationDetail'), (l[(l.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'), (l[(l.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'), (l[(l.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'), (l[(l.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'), (l[(l.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'), (l[(l.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'), (l[(l.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'), l),
    x = (((a = {})[(a.SystemDM = 0)] = 'SystemDM'), (a[(a.StandingTab = 1)] = 'StandingTab'), (a[(a.AppealIngestion = 2)] = 'AppealIngestion'), a);
Object.freeze({
    SPEED_BUMP: u.jXE.APPEAL_INGESTION_SPEED_BUMP,
    COLLECT_SIGNAL: u.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
    CONFIRM_SUBMISSION: u.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    REQUEST_SENT: u.jXE.APPEAL_INGESTION_REQUEST_SENT,
    THANKS: u.jXE.APPEAL_INGESTION_THANKS,
    SPAM: u.jXE.APPEAL_INGESTION_SPAM
});
var C = (((r = {})[(r.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'), (r[(r.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'), (r[(r.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'), (r[(r.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE'), r);
let E = [0, 1, 2, 3],
    v = 372,
    I = 279,
    N = { impression_group: d.ImpressionGroups.APPEAL_INGESTION };
var S = (((s = {}).SPEED_BUMP = 'speed-bump'), (s.COLLECT_SIGNAL = 'collect-signal'), (s.CONFIRM_SUBMISSION = 'confirm-submission'), (s.REQUEST_SENT = 'request-sent'), (s.THANKS = 'thanks'), s);
let T = {
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
var b = (((o = {})[(o.USER = 1)] = 'USER'), (o[(o.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (o[(o.GUILD_MEMBER = 3)] = 'GUILD_MEMBER'), o),
    A = (((c = {}).LOADING = 'loading'), (c.ERROR = 'error'), (c.SUCCESS = 'success'), (c.FAILURE = 'failure'), (c.NONE = 'none'), c);
let j = 5;
