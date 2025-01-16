n.d(t, {
    Cg: function () {
        return R;
    },
    Cp: function () {
        return g;
    },
    Cs: function () {
        return l;
    },
    EY: function () {
        return G;
    },
    I5: function () {
        return D;
    },
    JQ: function () {
        return P;
    },
    RY: function () {
        return d;
    },
    Sv: function () {
        return m;
    },
    TX: function () {
        return U;
    },
    ZW: function () {
        return M;
    },
    bK: function () {
        return A;
    },
    n0: function () {
        return N;
    },
    o6: function () {
        return h;
    },
    oE: function () {
        return L;
    },
    qS: function () {
        return T;
    },
    s: function () {
        return u;
    },
    sQ: function () {
        return p;
    },
    wo: function () {
        return c;
    }
});
var i,
    E,
    r,
    _,
    I,
    o,
    s,
    a,
    S,
    c,
    N,
    u,
    A,
    l,
    T,
    L,
    C = n(990547),
    f = n(981631);
function O(e, t, n) {
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
((i = S || (S = {})).SETTINGS = 'SETTINGS'), (i.ACCOUNT_STANDING = 'ACCOUNT_STANDING'), (i.GUILD_SETTINGS = 'GUILD_SETTINGS'), (i.ENCRYPTION = 'ENCRYPTION'), (i.CONTENT_AND_SOCIAL = 'CONTENT_AND_SOCIAL'), (i.DATA_PRIVACY = 'DATA_PRIVACY');
class p {}
O(p, 'TOS_LINK', 'https://discord.com/terms'), O(p, 'COMMUNITY_GUIDELINES', 'https://discord.com/guidelines'), O(p, 'APPEALS_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), O(p, 'WARNING_SYSTEM_HELPCENTER_LINK', 'https://support.discord.com/hc/articles/18210965981847'), O(p, 'AGE_VERIFICATION_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731'), O(p, 'SPAM_LINK', 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__'), O(p, 'LEARN_MORE_UU_APPEAL_LINK', 'https://support.discord.com/hc/articles/360041820932');
class R {}
O(R, 'CLASSIFICATION_ID', 'classification_id'), O(R, 'INCIDENT_TIMESTAMP', 'incident_time'), ((E = c || (c = {})).POLICY_VIOLATION_DETAIL = 'policy_violation_detail'), (E.LEARN_MORE_LINK = 'learn_more_link');
class D {}
O(D, 'ICON_TYPE', 'icon_type'),
    O(D, 'HEADER', 'header'),
    O(D, 'BODY', 'body'),
    O(D, 'CTAS', 'ctas'),
    O(D, 'TIMESTAMP', 'timestamp'),
    O(D, 'THEME', 'theme'),
    O(D, 'CLIENT_VERSION_MESSAGE', 'client_version_message'),
    O(D, 'LEARN_MORE_LINK', 'learn_more_link'),
    O(D, 'CLASSIFICATION_ID', 'classification_id'),
    ((r = N || (N = {}))[(r.ViewViolationDetail = 0)] = 'ViewViolationDetail'),
    (r[(r.ViewViolationsDropdown = 1)] = 'ViewViolationsDropdown'),
    (r[(r.ClickLetUsKnow = 2)] = 'ClickLetUsKnow'),
    (r[(r.ClickAgeVerificationLink = 3)] = 'ClickAgeVerificationLink'),
    (r[(r.ClickSpamWebformLink = 4)] = 'ClickSpamWebformLink'),
    (r[(r.ClickLearnMoreLink = 5)] = 'ClickLearnMoreLink'),
    (r[(r.ClickCommunityGuidelinesLink = 6)] = 'ClickCommunityGuidelinesLink'),
    (r[(r.ClickWarningSystemHelpcenterLink = 7)] = 'ClickWarningSystemHelpcenterLink'),
    ((_ = u || (u = {}))[(_.SystemDM = 0)] = 'SystemDM'),
    (_[(_.StandingTab = 1)] = 'StandingTab'),
    (_[(_.AppealIngestion = 2)] = 'AppealIngestion'),
    Object.freeze({
        SPEED_BUMP: f.jXE.APPEAL_INGESTION_SPEED_BUMP,
        COLLECT_SIGNAL: f.jXE.APPEAL_INGESTION_COLLECT_SIGNAL,
        CONFIRM_SUBMISSION: f.jXE.APPEAL_INGESTION_CONFIRM_SUBMISSION,
        REQUEST_SENT: f.jXE.APPEAL_INGESTION_REQUEST_SENT,
        THANKS: f.jXE.APPEAL_INGESTION_THANKS,
        SPAM: f.jXE.APPEAL_INGESTION_SPAM
    }),
    ((I = A || (A = {}))[(I.DIDNT_VIOLATE_POLICY = 0)] = 'DIDNT_VIOLATE_POLICY'),
    (I[(I.TOO_STRICT_UNFAIR = 1)] = 'TOO_STRICT_UNFAIR'),
    (I[(I.DONT_AGREE_PENALTY = 2)] = 'DONT_AGREE_PENALTY'),
    (I[(I.SOMETHING_ELSE = 3)] = 'SOMETHING_ELSE');
let d = [0, 1, 2, 3],
    m = 372,
    G = 279,
    M = { impression_group: C.ImpressionGroups.APPEAL_INGESTION };
((o = l || (l = {})).SPEED_BUMP = 'speed-bump'), (o.COLLECT_SIGNAL = 'collect-signal'), (o.CONFIRM_SUBMISSION = 'confirm-submission'), (o.REQUEST_SENT = 'request-sent'), (o.THANKS = 'thanks');
let P = {
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
((s = T || (T = {}))[(s.USER = 1)] = 'USER'), (s[(s.GUILD_OWNER = 2)] = 'GUILD_OWNER'), (s[(s.GUILD_MEMBER = 3)] = 'GUILD_MEMBER'), ((a = L || (L = {})).LOADING = 'loading'), (a.ERROR = 'error'), (a.SUCCESS = 'success'), (a.FAILURE = 'failure'), (a.NONE = 'none');
let U = 2000,
    g = 15000,
    h = 5;
