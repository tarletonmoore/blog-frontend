export function PostsNew() {

  return (
    <div>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create blog</button>
      </form>

    </div>
  );
}
