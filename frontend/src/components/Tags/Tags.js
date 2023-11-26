import React from 'react'
import classes from './tags.module.css'
import { Link } from 'react-router-dom';

export default function Tags({tags, forFooodPage}) {
  return (
    <div
      className={classes.container}
      style={{
        justifyContent: forFooodPage ? 'start' : 'center',
      }}
    >
      {tags.map(tag => (
        <Link key={tag.name} to={`/tag/${tag.name}`}>
          {tag.name}
          {!forFooodPage && `(${tag.count})`}
        </Link>
      ))}
    </div>
  );
}
