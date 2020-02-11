const SessionRepository = require('../repositories/session.repository');

class SessionService {
  static async updateMany(sessions) {
    for (const session of sessions) {
      await SessionRepository.update(session.id, session);
    }
  }

  static async setChecked(sessionId, status) {
    const result = await SessionRepository.update(sessionId, {
      completed: status
    });
  }
}

module.exports = SessionService;
