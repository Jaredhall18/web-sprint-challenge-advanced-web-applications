import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react';

const testArticle = {
    id:"1",
    headline: "This is an article",
    author: "Jared Hall",
    image: 123,
    createdOn: "today",
    summary: "Test summary",
    body: "Test body"
};
const testArticle2 = {
    id:"1",
    headline: "This is an article",
    author: "",
    image: 123,
    createdOn: "today",
    summary: "Test summary",
    body: "Test body"
};

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)
    const headline= screen.queryByTestId(/headline/i);
    const author= screen.queryByTestId(/author/i);
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle2} />);
    const noAuthor= screen.queryByText(/By Associated Press/i);
    expect(noAuthor).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const deleteMock = jest.fn()
    render(<Article article={testArticle} handleDelete={deleteMock}/>);
    const deleteButton= screen.getByTestId('deleteButton');
    userEvent.click(deleteButton);
    expect(deleteMock).toBeCalledTimes(1);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.