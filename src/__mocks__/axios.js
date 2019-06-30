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
      role: 'Trying to be a good developer',
      description: 'A description'
    }
  }
};

axiosMock.get.mockImplementation(req);

module.exports = axiosMock;
