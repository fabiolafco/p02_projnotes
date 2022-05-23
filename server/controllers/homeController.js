// URL: Get /
const index = (req, res) => {
  // Calculando emojis
  const emojieDataset = [
    '😎',
    '🗼',
    '😏',
    '☕',
    '🙋‍♂️',
    '👏',
    '🤓',
    '🖤',
    '💨',
    '💫',
    '🕳',
    
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // View-Models
  const viewModel = {
    title: 'Index Controller Working!!!',
    author: 'Fabiola francisco Olmos',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Fabiola Francisco',
    email: 'fabiola@gmail.com',
    url: 'https:',
  });
};

export default {
  // Action Methods
  index,
  about,
};
