import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "@/src/components/MovieDetails";
import PageHeader from "@/src/components/PageHeader";

export default function About({ movie }) {
  return (
    <div>
      <PageHeader text="Nishant Sharma - 150619203" />
      <Card>
        <Card.Body>
          <p>
            This is Nishant Sharma and I go by the stage name - Nisharrk (for
            music and development). You can find me on all music streaming
            platforms and social media platforms{" "}
            <Link href={"https://linktr.ee/nisharrk"}>here</Link>. I post all of
            my projects on github{" "}
            <Link href={"https://github.com/Nisharrk"}>here</Link>.{" "}
          </p>
          <p>
            Check out my favorite movie -{" "}
            <Link href={`/movies/${movie.title}`}>The Matrix</Link>
          </p>
        </Card.Body>
        <MovieDetails movie={movie} />
      </Card>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `https://famous-bull-undershirt.cyclic.app/api/movies/573a139bf29313caabcf3d23`
  );
  const data = await response.json();
  return { props: { movie: data } };
}
