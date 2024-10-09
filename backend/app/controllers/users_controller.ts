import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async getUsers({ response }: HttpContext) {
    try {
      const users = await User.all()
      return response.json(users)
    } catch (error) {
      return response.status(500).json({
        message: 'Error fetching users',
        error: error.message,
      })
    }
  }
}
