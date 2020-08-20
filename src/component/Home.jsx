import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h1 style={{ textDecoration: "underline" }}>Welcome to my site</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque
        esse iusto quae deserunt magni, repellat provident cupiditate
        perspiciatis aut distinctio dignissimos ullam libero quos dolore ipsum
        amet nostrum minus!
      </p>
      <hr />
      <div className="grid">
        <img
          style={{ borderRadius: "50%", height: "150px", width: "150px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxPEK_NOOynvLPFdU_phc0q9PUunVDl7ijhQ&usqp=CAU"
          alt="img"
        />
        <div className="grid-text">
          <h1>Let's program </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            accusantium dolor dolores, temporibus doloribus alias sequi iure
            accusamus, autem quibusdam, repudiandae obcaecati quidem dolorum
            quas veritatis hic voluptatibus error soluta.
          </p>
        </div>
      </div>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Lastname</th>
            <th>Lastname</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>Griffin</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Lois</td>
            <td>Lois</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Lois</td>
            <td>Lois</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Lois</td>
            <td>Lois</td>
            <td>Griffin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
