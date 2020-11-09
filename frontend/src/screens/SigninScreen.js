import { signin } from '../api';
import { getUserInfo, setUserInfo } from '../localStorage';

const SigninScreen = {
  after_render: () => {
    document
      .getElementById('signin-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = await signin({
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        });

        if (data.error) {
          alert(data.error);
        } else {
          setUserInfo(data);
          document.location.hash = '/';
        }
      });
  },
  render: () => {
    if (getUserInfo().name) {
      document.location.hash = '/';
    }
    return `
      <div class="form-container">
        <form id="signin-form">
          <ul class="form-items">
            <li>
              <h1>Login</h1>
            </li>
            <li>
              <label for="email">Email</label>
              <input type="email" placeholder='Email Address' name="email" id="email" />
            </li>
            <li>
              <label for="password">Password</label>
              <input type="password" placeholder='Password' name="password" id="password" />
            </li>
            <li>
              <button type="submit" class="primary">Go</button>
            </li>
            <li>
              <div>
                New User?
                <a href="/#/register" id="link">Create your account</a>
              </div>
            </li>
          </ul>
        </form>
      </div>
    `;
  },
};

export default SigninScreen;
