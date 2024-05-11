import { useQuery } from "@tanstack/react-query";

const useSkill = () => {
  const {
    data: allSkills = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5100/skills");
      return res.json();
    },
  });

  return [allSkills, loading, refetch];
};

export default useSkill;
