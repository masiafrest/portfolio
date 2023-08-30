import './Blog.css'

export default function Blog({ data }) {
  return (
    <section className='Blog'>
      <h2>Blogs</h2>
      <p>{data.description}</p>
      <ul>
        {data.links.map((l) => {
          return <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>;
        })}
      </ul>
    </section>
  );
}
