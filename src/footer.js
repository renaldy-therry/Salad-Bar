export const loadFooter = () => {
  const footerContainer = document.querySelector('footer');

  const footerText = document.createElement('p');
  const devNameLink = document.createElement('a');
  const sourceCodeLink = document.createElement('a');
  const copyrightSpan = document.createElement('span');

  const dividerSymbol = '⸱';
  footerText.textContent = '';

  devNameLink.textContent = 'Renaldy William Lijaya Therry';

  const year = new Date().getFullYear();
  copyrightSpan.textContent = `${year}`;

  sourceCodeLink.setAttribute('target', '_blank');

  footerText.append(
    'Dibuat Oleh',
    devNameLink,
    dividerSymbol,
    copyrightSpan,
  );
  footerContainer.append(footerText);
};
