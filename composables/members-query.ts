export const useAllFacultyMemberQuery = () =>
  queryContent("members", "faculty");
export const useAllPostDocQuery = () => queryContent("members", "postdoc");
export const useAllGradStudentQuery = () =>
  queryContent("members", "grad-student");

export const useAllAlumniQuery = () => queryContent("members", "alumni");
