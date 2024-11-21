import React, { useState, useEffect, useRef, useCallback } from "react";

import axios from "axios";
import styled from "styled-components";

import Title from "./Title";
import Card from "./Card";
import ErrorComponent from "../common/Error";
import InfoComponent from "../common/Info";
import LoadingSpinner from "../common/Loading";

import { getYesterdaysDate } from "../../util/Date";

const MainComponent = () => {
  const date = getYesterdaysDate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef();

  const fetchData = useCallback(
    async (page = 1) => {
      if (!hasMore) return;

      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc&page=${page}&per_page=15`
        );

        const newData = response?.data?.items;

        if (newData && newData?.length === 0) {
          setHasMore(false);
        } else {
          setData((prev) => [...prev, ...newData]);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [page, hasMore]
  );

  // Observer callback to detect when the target element is visible
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading && !error) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [hasMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1.0,
    });
    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [handleObserver, data]);

  useEffect(() => {
    fetchData(page);
  }, [page, fetchData]);

  const handleRetry = () => fetchData(page);

  return (
    <MainOuter>
      <Title />
      <div style={{ listStyle: "none", padding: 0 }}>
        {data.map((item) => (
          <Card
            title={item.name}
            description={item?.description}
            Owner={item?.owner?.login}
            avatarUrl={item?.owner?.avatar_url}
            startCount={item?.stargazers_count}
          />
        ))}
      </div>
      {loading && <LoadingSpinner />}
      {error && <ErrorComponent onRetry={handleRetry} />}

      {!error && (
        <div
          ref={observerRef}
          style={{
            height: "20px",
            background: "transparent",
            margin: "10px 0",
          }}
        />
      )}
      {!hasMore && <InfoComponent />}
    </MainOuter>
  );
};

export default MainComponent;

const MainOuter = styled.div`
  padding: 20px;
`;
