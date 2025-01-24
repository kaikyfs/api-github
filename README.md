# GitHub User Repositories Viewer

GitHub User Repositories Viewer is a React-based web application that allows you to search for a GitHub user, view some basic information about the user, and see a list of all their public repositories. This project uses the GitHub API to fetch user data and repositories.

## Features

- Search for a GitHub user by username.
- Display basic user information such as:
  - Profile picture.
  - Username.
- List all public repositories of the user.
- Mock API during development using `json-server`.

## Built With

- **React**: For building the user interface.
- **Styled Components**: For styling the application.
- **GitHub API**: To fetch user and repository data.
- **json-server**: For mocking API responses during development.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-user-repos-viewer.git
   cd github-user-repos-viewer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. (Optional) Run the mock server:

   ```bash
   npx json-server --watch db.json --port 5000
   ```

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Enter a GitHub username in the search bar and press enter.
3. View the user's profile information and list of repositories.

## Mock API Setup (Development Phase)

A `db.json` file is used to simulate API responses during development. To use the mock server:

1. Create a `db.json` file in the root directory with mock user and repository data.
2. Start the server as shown in the installation steps.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss the changes you would like to make.

Please ensure that your code follows the project's coding standards and includes appropriate tests.

## License

[MIT](https://choosealicense.com/licenses/mit/)

