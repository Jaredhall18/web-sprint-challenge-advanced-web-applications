import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from '../services/articleServices';
jest.mock("../services/articleServices.js")

const noTestArticles = [{}];
const testArticles = [
    {
        id:"1",
        headline: "This is an article",
        author: "Jared Hall",
        image: 123,
        createdOn: "today",
        summary: "Test summary",
        body: "Test body",
    },
    {
        id:"2",
        headline: "This is an article",
        author: "Jared Hall",
        image: 123,
        createdOn: "today",
        summary: "Test summary",
        body: "Test body",
    },
     {
        id:"3",
        headline: "This is an article",
        author: "Jared Hall",
        image: 123,
        createdOn: "today",
        summary: "Test summary",
        body: "Test body",
    },
];

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce(noTestArticles);
    render(<View articles={noTestArticles}/>);
    const article= await screen.queryByTestId(/article/i);

    expect(article).toBeNull();
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce(testArticles);
    render(<View articles={testArticles}/>);
    const article= await screen.findAllByTestId("headline");

    expect(article).toHaveLength(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.