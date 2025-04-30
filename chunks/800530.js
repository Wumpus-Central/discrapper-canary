n.d(t, {
    Cg: () => f,
    Cp: () => T,
    Cs: () => j,
    EY: () => v,
    I5: () => g,
    JQ: () => C,
    RY: () => y,
    Sv: () => E,
    TX: () => N,
    ZW: () => O,
    bK: () => x,
    n0: () => _,
    o6: () => P,
    oE: () => I,
    qS: () => S,
    s: () => b,
    sQ: () => m,
    wo: () => h
});
var r,
    i,
    l,
    a,
    o,
    s,
    c,
    u = n(990547),
    d = n(981631);
function p(e, t, n) {
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
class m {}
p(m, 'TOS_LINK', 'https://discord.com/terms'), p(m, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), p(m, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), p(m, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), p(m, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), p(m, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__'), p(m, 'LEARN_MORE_UU_APPEAL_LINK', 'https://support.discord.com/hc/articles/360041820932');
class f {}
p(f, 'CLASSIFICATION_ID', 'classification_id'), p(f, 'INCIDENT_TIMESTAMP', 'incident_time');
var h = (((r = {}).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (r.LEARN_MORE_LINK = 'learn_more_link'), r);
class g {}
p(g, 'ICON_TYPE', 'icon_type'), p(g, 'HEADER', 'header'), p(g, 'BODY', 'body'), p(g, 'CTAS', 'ctas'), p(g, 'TIMESTAMP', 'timestamp'), p(g, 'THEME', 'theme'), p(g, 'CLIENT_VERSION_MESSAGE', 'client_version_message'), p(g, 'LEARN_MORE_LINK', 'learn_more_link'), p(g, 'CLASSIFICATION_ID', 'classification_id');
var _ = (((i = {})[(i.ViewViolationDetail = 0)] = 'ViewViolationDetail'), (i[(i.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'), (i[(i.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'), (i[(i.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'), (i[(i.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'), (i[(i.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'), (i[(i.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'), (i[(i.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'), i),
    b = (((l = {})[(l.SystemDM = 0)] = 'SystemDM'), (l[(l.StandingTab = 1)] = 'StandingTab'), (l[(l.AppealIngestion = 2)] = 'AppealIngestion'), l);
Object.freeze({
    SPEED_BUMP: d.jXE.APPEAL_INGESTION_SPEED_BUMP,
    COLLECT_SIGNAL: d.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
    CONFIRM_SUBMISSION: d.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
    REQUEST_SENT: d.jXE.APPEAL_INGESTION_REQUEST_SENT,
    THANKS: d.jXE.APPEAL_INGESTION_THANKS,
    SPAM: d.jXE.APPEAL_INGESTION_SPAM
});
var x = (((a = {})[(a.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'), (a[(a.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'), (a[(a.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'), (a[(a.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE'), a);
let y = [0, 1, 2, 3],
    E = 372,
    v = 279,
    O = { impression_group: u.ImpressionGroups.APPEAL_INGESTION };
var j = (((o = {}).SPEED_BUMP = 'speed-bump'), (o.COLLECT_SIGNAL = 'collect-signal'), (o.CONFIRM_SUBMISSION = 'confirm-submission'), (o.REQUEST_SENT = 'request-sent'), (o.THANKS = 'thanks'), o);
let C = {
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
var S = (((s = {})[(s.USER = 1)] = 'USER'), (s[(s.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (s[(s.GUILD_MEMBER = 3)] = 'GUILD_MEMBER'), s),
    I = (((c = {}).LOADING = 'loading'), (c.ERROR = 'error'), (c.SUCCESS = 'success'), (c.FAILURE = 'failure'), (c.NONE = 'none'), c);
let N = 2000,
    T = 15000,
    P = 5;
