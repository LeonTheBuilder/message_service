class SmsService {
    async sendSms(args) {
        const {
            provider,
            phone, // 带有国家前缀的手机号格式，比如 +8613018281779
            content,
        } = args;

        // todo 检查手机号格式、检查向同一个手机号发送短信的频率
    }
}

module.exports = SmsService;