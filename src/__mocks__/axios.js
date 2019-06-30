const axiosMock = jest.genMockFromModule('axios');
const req = () => {
  return new Promise(resolve => {
    axiosMock.delayTimer = setTimeout(() => {
      resolve(mockResponse);
    }, 100);
  });
};

let mockResponse = {
  data: {
    profile: {
      name: 'Bruce Wayne',
      role: 'Trying to be a good developer'
    },
    information: {
      about: 'About me',
      contact: {
        email: 'brandon.jones1985@gmail.com',
        twitter: 'https://www.twitter.com/BrandonJ0nes',
        github: 'https://github.com/bjonesy'
      }
    }
  }
};

axiosMock.get.mockImplementation(req);

module.exports = axiosMock;
