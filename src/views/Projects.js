import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import CardWrapper from "./CardWrapper.js";

const projects = [
  {
    name: "reSearch",
    title: "Team of Four",
    timeframe: "May 2020",
    content:
      "reSearch is a database of research papers and researchers designed to make it easier for individuals to find relevant literature and key contributors in different academic fields. Given a user query, reSearch searches through thousands of papers and finds the most similar papers and authors to the user query. Not only does reSearch provide an easy to understand similarity metric for each search result, it also provides a visualization for users to understand how similar their query is to the articles in the database. What differentiates reSearch from other academic search engines, such as Google Scholar or EBSCOHost, is that there is no limit on the size of the user query term. Instead of searching with generic key phrases such as “machine learning” or “deep learning”, reSearch allows users to search with detailed text such as an entire research statement. In this way, reSearch can tailor its results to the user with more accuracy.",
    skills: [
      "Java",
      "Python",
      "Spark",
      "Flask",
      "Word2Vec",
      "KMeans",
      "Locality Sensitive Hashing",
    ],
    image: require("../assets/img/query.png"),
  },
  {
    name: "Predicting Accidents in New York City",
    title: "Team of Four",
    timeframe: "May 2020",
    content:
      "The goal of this project is to create a machine learning model that predicts the number of car accidents in a given borough of New York City during any given hour. Some of the model features include weather conditions, average traffic speeds, time of day, location, and more. Data to train this model is collected from NYC OpenData and DarkSky’s weather API. These datasets are cleaned and joined to obtain the final table for training. Training is done with a multilinear regression model; many different feature combinations are tested. Performance of the model is compared to a baseline model which always predicts the average number of car accidents per hour across the entire training timeframe. Continuous features are feature-scaled and boolean features are one-hot encoded. Train-test split is a random 80/20 split. Best performing model outperforms baseline model by reducing mean squared error by over 50%.",
    skills: ["Python", "SQL", "Statsmodels", "Linear Regression"],
    image: require("../assets/img/poster.png"),
    links: [
      { name: "Poster", src: require("../assets/pdf/poster.pdf") },
      { name: "Abstract", src: require("../assets/pdf/abstract.pdf") },
    ],
  },
  {
    name: "Machine Learning Algorithms from Scratch",
    title: "Solo",
    timeframe: "June 2020",
    content:
      "In this project, I implemented a collection of machine learning algorithms from scratch using MATLAB. The algorithms include linear regression, logistic regression, neural nets, support vector machines, kmeans, principal component analysis, and more. Algorithms are optimized to consider concepts such as regularization, feature scaling, bias/variance, precision/recall, and more. After implementing these algorithms, I applied them to several use cases, including building digit classifiers, image compressors, spam classifiers, recommender systems, and more.",
    skills: [
      "MATLAB",
      "Linear Regression",
      "Logistic Regression",
      "Neural Nets",
      "SVM",
      "KMeans",
      "PCA",
    ],
    image: "",
  },
  {
    name: "Topic Modeling News Articles",
    title: "Solo",
    timeframe: "April 2020",
    content:
      "This project aims to create a topic classifier for news articles. The input to the model is a set of BBC articles labeled with one of five different categories--business, entertainment, politics, technology, and sports. These articles are tokenized, stemmed, and cleaned. The resulting article-word relationship can be represented in a matrix with a row for each article, a column for each word across all of the articles, and where each value in the matrix represents the number of occurrences of a word in the corresponding article. td-idf is then used to convert the number of occurrences of each word into a more meaningful measure of significance. This tf-idf matrix is then transformed using singular value decomposition, revealing the most meaningful composite features as well as which composite features correspond most strongly to each article. Now the articles are represented by these new features, which are used to train various classifiers for the five original article topics. The best performing classifier (knearest neighbors) achieved over 80% accuracy.",
    skills: [
      "Python",
      "NLP",
      "Information Retrieval",
      "Word Embeddings",
      "SVD",
      "LSA",
    ],
    image: "",
  },
];

function Projects() {
  return (
    <>
      <div className="section" id="projects">
        <Container>
          <h2 className="title">Selected Projects</h2>
          <div>
            <Row className="justify-content-around">
              {projects.map((project, i) => (
                <Col key={i} md="6">
                  <CardWrapper content={project}></CardWrapper>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Projects;
