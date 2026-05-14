import { useEffect } from "react";
import { useFetch } from "../../../contexts/FetchContext/FetchContext";
import { API_BASE_URL } from "../../../config/apiBaseUrl";

const LearningObjectives = () => {
  const { data, loading, error, fetchData } = useFetch();
  const projectId = 16;

  useEffect(() => {
    fetchData(
      `${API_BASE_URL}/api/learning-objectives?project_id=${projectId}`,
    );
  }, [fetchData, projectId]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ background: "transparent" }}>
      {data && (
        <div
          dangerouslySetInnerHTML={{ __html: data.learning_objective }}
        ></div>
      )}
    </div>
  );
};

export default LearningObjectives;
