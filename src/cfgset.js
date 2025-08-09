const messageServiceSet = (cfg) => {
    cfg.mail = {
        host: process.env.COMMON_MAIL_HOST || 'smtp.163.com',
        port: process.env.COMMON_MAIL_PORT || 465,
        secure: process.env.COMMON_MAIL_SECURE || true,
        user: process.env.COMMON_MAIL_USER || 'nocutadmin@163.com',
        pass: process.env.COMMON_MAIL_PASS || 'AMPQmz4HZFrueTmP', // 有效期6个月，设置日期2025-02-01
    };
}


module.exports = messageServiceSet;
